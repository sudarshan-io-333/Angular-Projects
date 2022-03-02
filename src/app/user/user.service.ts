import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs' //use subject instad of observale

@Injectable({providedIn:'root'})
export class UserService {
    // activatedEmitter = new EventEmitter<boolean>();
    activatedEmitter = new Subject<boolean>(); //Subject is a special kind of observable.activatedEmitter is a subject.
}