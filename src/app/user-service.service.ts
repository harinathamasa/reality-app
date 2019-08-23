import { EventDetails } from './models/event-details';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  eventDetails:EventDetails;
  constructor() { }

  login(eventName,password): Observable<EventDetails>{
   this.eventDetails.name = eventName;
   return ;
  }
}
