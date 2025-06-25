import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import { TaskServiceService } from '../../providers/task-service.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<AddComponent>,
    private readonly taskService: TaskServiceService

  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      status: ['', Validators.required],
      desc: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  async onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
      this.dialogRef.close(this.form.value); // child notifies parent
      // Call the service to save the new task
      let data = {
        title: this.form.value.title,
        status: this.form.value.status,
        description: this.form.value.desc
      }
      const response_data = await this.taskService.newTask(data);
      // Here you can call your service to save the data
      // this.taskService.newTask(this.form.value).then(response => {
      //   console.log('Task added successfully', response);
      // }).catch(error => {
      //   console.error('Error adding task', error);
      // });
    } else {
      console.log('Form is invalid');
    }
  }
}
