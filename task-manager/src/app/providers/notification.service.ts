
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({ providedIn: 'root' })
export class NotificationService {
  ws!: WebSocket;
  constructor(private snackBar: MatSnackBar) {}

  connect() {
    this.ws = new WebSocket('wss://my-fastapi-app-1v32.onrender.com/ws');
    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      console.log('Notification:', msg);
      // Show toast or update store
       this.snackBar.open(`Task Event: ${msg.type}`, 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    };
    };
  

  close() {
    this.ws.close();
  }
}
