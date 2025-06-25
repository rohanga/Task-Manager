import { Component, OnInit } from '@angular/core';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { ConfirmComponent } from '../confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskServiceService } from '../../providers/task-service.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['srNo', 'title', 'description', 'status', 'actions'];
  isLoading = false;
  dataSource = []

  constructor(private readonly dialog: MatDialog, private readonly taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.loadTasks();
  }
  async loadTasks() {
 
    const data = await this.taskService.tasks();
    console.log('Tasks loaded:', data);
    this.dataSource = data;
    this.isLoading = false;
  }
  addTask() {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isLoading = true;
      console.log('The dialog was closed', result);
      this.loadTasks();
      // You can handle the result here if needed
    });
  }
  editTask(task) {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '400px',
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed-------------', result);
      this.isLoading = true;
      this.loadTasks();
      // You can handle the result here if needed
    });
  }
  confirmDelete(task: any) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '350px',
      data: { id: task.id } // send task id to dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.isLoading = true;
        this.deleteTask(result); // result will be the taskId
        this.loadTasks();
      }
    });
  }

  async deleteTask(taskId: string) {
       this.isLoading = true;
    console.log('Deleting task with ID:', taskId);
    await this.taskService.removeTask(taskId)
    this.loadTasks(); // refresh list

  }

}
