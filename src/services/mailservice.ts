import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private baseUrl:string = "https://frozen-temple-18301.herokuapp.com";
  constructor(private http: HttpClient) { }

  public sendMail(
    email:string, 
    rsvp:boolean, 
    comments:string, 
    numGuests:number, 
    name:string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/dorsvp?Email=${email}&Comments=${comments}&RSVP=${rsvp}&NumGuests=${numGuests}&Name=${name}&appid=89y7`);
  }  
}
