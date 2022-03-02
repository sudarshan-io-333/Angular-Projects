import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription,Observable } from 'rxjs';
import { filter,map } from 'rxjs/operators';

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
        if (count === 5) {
          observer.complete(); // complete method complete the observable successfully after this no value will thrown.
        }
        //there is no need to unsubscribe when the observable complete successfully
        if (count > 3) { 
          observer.error(new Error('Count is gretaer 3')); //once observables throws an error it cant emit any value.it dies.
        }
        count++;
      }, 1000);
    });  

    //here we call map as a function inside of pipe and map in turn takes a function as an argument.
    // every observable has a pipe method and its built into RxJS
    //pipe method takes an unlimited amount of arguments and each operator imported from rxJs
    // the line 44 - 46 replace in line 59 with customIntervalObservable

    // customIntervalObservable.pipe(map((data: number) => {
    //   return 'Round: ' + (data + 1);
    // })); 


  //   this.firstObsSubscription = customIntervalObservable.subscribe(data => {
  //     console.log(data);
  //   }, error => {
  //     console.log(error);
  //     alert(error.message);
  //     }, () => {                  // this is anonymous simple for cleanup or show some msg after completing observable
  //       console.log('Complete!');
  //   });
  // }
    
    this.firstObsSubscription = customIntervalObservable.pipe(filter(data => {
      return data > 0;
    }),map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(data => {
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