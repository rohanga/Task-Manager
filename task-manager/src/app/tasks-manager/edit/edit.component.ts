// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { Inject } from '@angular/core';
// @Component({
//   selector: 'app-edit',
//   templateUrl: './edit.component.html',
//   styleUrls: ['./edit.component.scss']
// })
// export class EditComponent implements OnInit {

//   form: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private dialogRef: MatDialogRef<EditComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any 
//   ) {
//     this.form = this.fb.group({
//       title: [''],
//       description: [''],
//       status: ['']
//     });
//   }

//   ngOnInit(): void {
//     this.form.patchValue(this.data);
//   }

//   updateTask() {

//     if (this.form.valid) {
//       // this.taskService.updateTask(this.data.id, this.form.value).subscribe(() => {
//         this.dialogRef.close(true);
//       // });
//     }
//   }



// }

import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskServiceService } from '../../providers/task-service.service';
// import { TaskService } from '../task.service';
// import { Task } from '../models/task.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, // inject data passed from parent    
    public dialogRef: MatDialogRef<EditComponent>,
    private fb: FormBuilder,
    private readonly taskService: TaskServiceService
  ) {
    this.form = this.fb.group({
      title: [data.title, Validators.required],
      description: [data.description, Validators.required],
      status: [data.status, Validators.required]
    });
  }

  async updateTask() {
    if (this.form.valid) {

      const updatedData = {
        id: this.data.id, // include task ID in payload
        ...this.form.value
      };

     let response_data= await this.taskService.applyTaskChanges(updatedData)
      this.dialogRef.close(response_data); // close popup and notify parent
      // });
    } else {
      console.log('Form is invalid');
    }
  }
}