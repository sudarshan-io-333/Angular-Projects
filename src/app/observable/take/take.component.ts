import { Component, OnInit } from '@angular/core';
import { interval, from, timer, fromEvent } from 'rxjs';
import { take, takeLast, takeUntil, map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor(private _du :DesignUtilityService) { }

  randomNames = ['Sudarshan', 'Pandurang', 'Gajdhane', 'Python', 'Angular', 'Java','HTML','CSS','Javascript'];
  ngOnInit(): void {

    // const src = interval(1000);
    //Or
    //Ex -01 | Take

    const nameSource = from(this.randomNames);

    // const src = interval(1000).pipe(take(5));

    // src.subscribe(res => {
    //   console.log(res);
    // })

    // Take operator - it take values from start and TakeLast take values from last

    nameSource.pipe(take(5))
      .subscribe(res => {
        // console.log(res); //Sudarshan', 'Pandurang', 'Gajdhane', 'Python', 'Angular'
      this._du.print(res,'elContainer')
   })

    //Ex -02

    nameSource.pipe(takeLast(5))
      .subscribe(res => {
        // console.log(res); // 'Angular', 'Java','HTML','CSS','Javascript'
        this._du.print(res, 'elContainer2')
      })
    

    //Ex -03    takeUntil() takes observable as a parameter

    const src1 = interval(1000);
    let condition1 = timer(5000); // here timer is observable
    let condition2 = fromEvent(document, 'click'); //fromEvent takes two argument i.e target and event.
    //so when we click on document the emitting of data will be stop.thats why we take document as target and 
    // click as event.

    // src1.pipe(
    //   map(data => 'Data ' + data),
    //   takeUntil(condition2)
    // )
      // .subscribe(res => {
        // console.log(res); // 'Angular', 'Java','HTML','CSS','Javascript'
        // this._du.print(res, 'elContainer3')

      // })






  }

}
