import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';
import { Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  //List Data
  video;
  user1List = [
    'Angular 1',
    'Angular 2'
  ];
  user2List = [
  ];
  user3List = [
  ];

  //SubscribeModes
  subscribeModes2: boolean = false;
  subscribeModes3: boolean = false;

  // Subscriptions
  subscription2: Subscription;
  subscription3: Subscription;
  intSubscription: Subscription;

  // Toggle Properties
  methodInterval: boolean = false;

  constructor(private duService: DesignUtilityService) { }

  ngOnInit(): void {
    this.duService.videoEmit.subscribe(res => {
      this.user1List.push(res);
    })
  }
  onVedioAdd(vedio) {
    this.duService.videoEmit.next(vedio);
  }
  user2Subscribe() {
    if (this.subscribeModes2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this.duService.videoEmit.subscribe(res => {
        this.user2List.push(res);
      })
    }
    
    this.subscribeModes2 = !this.subscribeModes2;
  }
  user3Subscribe() {
    if (this.subscribeModes3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this.duService.videoEmit.subscribe(res => {
        this.user3List.push(res);
      })
    }
    this.subscribeModes3 = !this.subscribeModes3;
  }
  // Toggle Method
  toggleMethod() {
    const broadCastVideo = interval(1000);
    if (!this.methodInterval) {
      this.intSubscription = broadCastVideo.subscribe(res => {
        this.duService.videoEmit.next('Video' + res)
      })
    }
    else {
      this.intSubscription.unsubscribe();
      }
      this.methodInterval = !this.methodInterval;
  }
}
