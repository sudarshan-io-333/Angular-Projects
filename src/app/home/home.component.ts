import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription,Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription = Subscription;
  
  constructor() { }
  
  
  ngOnInit() {
    // interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    // create method create new observable and it takes function, here we pass anonymous fun to create()
    //create method get an argument automatically, RXJS will pass in that argument for us and that argument so called 'observer'.
    //here setinterval takes an anonymous function 
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count); // next method inform about updated data
        if (count === 2) {
          observer.complete(); // complete method complete the observable successfully after this no value will thrown.
        }
        //there is no need to unsubscribe when the observable complete successfully
        if (count > 3) { 
          observer.error(new Error('Count is gretaer 3')); //once observables throws an error it cant emit any value.it dies.
        }
        count++;
      }, 1000);
    });  

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
      }, () => {                  // this is anonymous simple for cleanup or show some msg after completing observable
        console.log('Complete!');
    });
  }

  ngOnDestroy(): void {

    // this.firstObsSubscription.unsubscribe(); //unsubscribe not wroking
  
  }
}