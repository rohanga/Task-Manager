import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import { environment } from '../../environments/environment';
import { CreateTask,Task } from './task.model';
@Injectable({
  providedIn: 'root'
})

export class TaskServiceService {
  
  private readonly API_BASE_URL: string = `${environment.apiurl}`;

  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': '*/*'
  });

  constructor(private http:HttpClient) { }


  tasks():Promise<any> {
    const url= `${this.API_BASE_URL}/tasks`;
    console.log('Fetching tasks from:', url);
    return this.http.get<any>(url, { headers: this.headers }).toPromise();
  }

  newTask(payload: CreateTask): Promise<any> {
    const url= `${this.API_BASE_URL}/task`;
    console.log('Creating new task at:', url,payload);
    return this.http.post<any>(url, payload, {
      headers: this.headers
    }).toPromise()
  }

  applyTaskChanges(payload: Task): Promise<any> {
    const url= `${this.API_BASE_URL}/task/${payload.id}`;
    console.log('Updating task at:', url,payload);
    return this.http.put<any>(url, payload, {
      headers: this.headers
    }).toPromise()
  }

  removeTask(taskId: string): Promise<any> {
     const url= `${this.API_BASE_URL}/task/${taskId}`;
    console.log('Removing task at:', url);
    return this.http.delete<any>(url, {
      headers: this.headers
    }).toPromise()
  }

}
