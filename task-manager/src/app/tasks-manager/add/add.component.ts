import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,
        private dialogRef: MatDialogRef<AddComponent>

  ) {
    this.form = this.fb.group({
      title: [''],
      status: [''],
      desc: ['']
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
            this.dialogRef.close(this.form.value); // child notifies parent

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
