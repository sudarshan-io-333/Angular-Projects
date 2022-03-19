import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();
  // username = new Subject<string>();//Simple subject
  // OR
  username = new BehaviorSubject<string>('Sudarshan'); //BehaviorSubject is used to set 
  // initial value for subject. here we set sudarshan but in simple subject we cant set initial value.
  
  videoEmit = new ReplaySubject<string>(3,5000); // here we want 3 previous record
  // thats why we give 3 in argument.
  //we can also give timeLimit as a second argument .ie. if we subscribe whithin that time 
  // then and then only we get value(video) otherwise not.

  asyncVideoEmit = new AsyncSubject();

  constructor() { }
 
  print(val, containerId) {
    let e1 = document.createElement('li');
    e1.innerText = val;
    document.getElementById(containerId).appendChild(e1);
  }
}
