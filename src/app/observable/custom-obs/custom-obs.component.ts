import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom-obs',
  templateUrl: './custom-obs.component.html',
  styleUrls: ['./custom-obs.component.css']
})
export class CustomObsComponent implements OnInit , OnDestroy{

  techStatus;
  techStatus2;
  names;
  nameStatus;
  subs2: Subscription;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    //Ex - 01(Manual)

    const cusObs1 = Observable.create(observer => {
     
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      
      setTimeout(() => {
        observer.next('Typescript');
      }, 2000);

      setTimeout(() => {
        observer.next('HTML and CSS');
        
      }, 3000);

      setTimeout(() => {
        observer.next('Javascript');
        // observer.error(new Error('Limit Exceeds'))
       
      }, 4000);

      setTimeout(() => {
        observer.next('JQuery');
        observer.complete();
      }, 5000);
     
    })
    
    //subscribe(data, error, completion)

    cusObs1.subscribe(res => {
      // console.log(res);
      this._designUtility.print(res, 'elContainer');
    },
      (err) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      })
    

    // Ex - 02(Custom Interval)
    const Arr2 = ['Angular', 'Javascript', 'Html', 'CSS', 'Typescript']
    const cusObs2 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr2[count]);
        count++;
        if (count > 3) {
          observer.error('Error')
        }
      }, 1000)
    })
    
    this.subs2 = cusObs2.subscribe(res => {
      this._designUtility.print(res, 'elContainer2')
    },
      (err) => {
        this.techStatus2 = 'error';
      },
      () => {
        this.techStatus2 = 'completed';
      })
  


    // Ex -03 (Random Names)

    const Arr3 = ['Alexa', 'Dennis', 'Albert', 'John', 'Robert', 'Marry'];
    const cusObs3 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr3[count]);

        if (count >= 2) {
          observer.error('Error occurs');
        }
        if (count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000)
    })

    cusObs3.subscribe(res => {
      console.log(res);
      this.names = res;
    },
      (err) => {
        this.nameStatus = 'error';
      },
      () => {
        this.nameStatus = 'completed';
    })
  }


  ngOnDestroy() {
    this.subs2.unsubscribe();
  }
}





