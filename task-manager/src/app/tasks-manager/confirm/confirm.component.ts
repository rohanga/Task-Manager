

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private dialogRef: MatDialogRef<ConfirmComponent>
  ) {}

  onConfirm() {
    console.log('Confirmed deletion for ID:', this.data.id);
    this.dialogRef.close(this.data.id); // send ID back to parent
  }

  onCancel() {
    this.dialogRef.close(); // just close
  }
}
