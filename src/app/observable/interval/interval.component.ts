import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  obsMsg;
  videosubscription: Subscription;
  constructor(private _designUtility: DesignUtilityService
  ) { }

  ngOnInit(): void {

    // const broadCastVideos = interval(1000);
    //timer(delay,interval)
    const broadCastVideos = timer(5000,1000);

    this.videosubscription =broadCastVideos.subscribe(res => {
      console.log(res);
      this.obsMsg = 'Video' + res;

      this._designUtility.print(this.obsMsg, 'elContainer');
      this._designUtility.print(this.obsMsg, 'elContainer2');
      this._designUtility.print(this.obsMsg, 'elContainer3');

      if (res >= 5) {
        this.videosubscription.unsubscribe();
      }
    })
  }

}
