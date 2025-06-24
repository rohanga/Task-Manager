import { Component, OnInit } from '@angular/core';
import  {AddComponent} from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
displayedColumns: string[] = ['srNo', 'title', 'description', 'status', 'actions'];
dataSource= [
  {
    id: '1',
    title: 'Buy groceries',
    description: 'Milk, Bread, Eggs, Fruits',
    status: 'pending',
    created_at: new Date('2025-06-20T10:00:00')
  },
  {
    id: '2',
    title: 'Pay electricity bill',
    description: 'Due date: 25th June',
    status: 'completed',
    created_at: new Date('2025-06-18T14:30:00')
  },
  {
    id: '3',
    title: 'Submit project report',
    description: 'Final version needs to be emailed to manager',
    status: 'pending',
    created_at: new Date('2025-06-19T09:00:00')
  },
  {
    id: '4',
    title: 'Book doctor appointment',
    description: 'Routine checkup',
    status: 'completed',
    created_at: new Date('2025-06-17T11:15:00')
  },
  {
    id: '5',
    title: 'Clean garage',
    description: 'Weekend cleaning task',
    status: 'pending',
    created_at: new Date('2025-06-16T08:45:00')
  }
];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addTask() {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
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
      // You can handle the result here if needed
    });
  }
  
}
