import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksManagerRoutingModule } from './tasks-manager-routing.module';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [ViewComponent, EditComponent, AddComponent, ListComponent],
  imports: [
    CommonModule,
    TasksManagerRoutingModule
  ]
})
export class TasksManagerModule { }
