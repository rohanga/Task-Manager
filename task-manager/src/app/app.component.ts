import { Component,OnDestroy,OnInit } from '@angular/core';
import { NotificationService } from './providers/notification.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy { 
  constructor(private notifService: NotificationService) {}
    ngOnInit() {
    this.notifService.connect();
  }
  ngOnDestroy() {
    this.notifService.close();
  }

  
  title = 'task-manager';
}
