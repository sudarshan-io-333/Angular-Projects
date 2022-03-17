import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  obsSubscription: Subscription;
  obsSubscription2: Subscription;

  myColor: string = '';
  constructor(private _du: DesignUtilityService) { }

  ngOnInit(): void {

    // Ex -01
    const Arr = ['Sudarshan', 'Sonali', 'Rushikesh', 'Aakash', 'Vijay']


    const Colors = ['Orange', 'White', 'Blue', 'Green']


    const src = interval(1000);
    const src2 = interval(1000);

    this.obsSubscription = src.pipe(
      tap(res => {
        if (res === 4)
          this.obsSubscription.unsubscribe();
       }),
      map(res =>  Arr[res]))
      .subscribe(res => {
       console.log(res);
       this._du.print(res, 'elContainer');
      })
    
    // Ex -02

    this.obsSubscription2 = src2.pipe(
      tap(res => {
        this.myColor = Colors[res];
        if (res === 4)
          this.obsSubscription2.unsubscribe();
      }),
      map(res => Colors[res]))
      .subscribe(res => {
        console.log(res);
        this._du.print(res, 'elContainer2');
      })

  }
}
