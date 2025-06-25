import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksManagerRoutingModule } from './tasks-manager-routing.module';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';


import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './confirm/confirm.component';
@NgModule({
  declarations: [ViewComponent, EditComponent, AddComponent, ListComponent, ConfirmComponent],
  imports: [
    CommonModule,
    TasksManagerRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
  ]
})
export class TasksManagerModule { }
