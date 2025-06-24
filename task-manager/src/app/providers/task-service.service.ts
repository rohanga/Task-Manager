import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private readonly API_BASE_URL: string = `${environment.apiurl}/app`;

  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': '*/*'
  });

  constructor(private http:HttpClient) { }


  tasks():Promise<any> {
    const url= `${this.API_BASE_URL}/tasks`;
    return this.http.get<any>(url, { headers: this.headers }).toPromise();
  }

  newTask(payload: any) {
    const url= `${this.API_BASE_URL}/tasks`;
    return this.http.post<any>(url, payload, {
      headers: this.headers
    }).toPromise()
  }

  applyTaskChanges(payload: any) {
    const url= `${this.API_BASE_URL}/tasks`;
    return this.http.put<any>(url, payload, {
      headers: this.headers
    }).toPromise()
  }

  removeTask(taskId: string) {
     const url= `${this.API_BASE_URL}/tasks/${taskId}`;
    return this.http.delete<any>(url, {
      headers: this.headers
    }).toPromise()
  }

}
