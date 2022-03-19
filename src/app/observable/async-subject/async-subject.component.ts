import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';


@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {


  asyncVideoEmit;
  constructor(private duService: DesignUtilityService) { }

  ngOnInit(): void {
    
    this.duService.asyncVideoEmit.subscribe(res => {
      this.asyncVideoEmit = res;
  })
  }
  onVedioAdd(video) {
    console.log(video);
    this.duService.asyncVideoEmit.next(video);  
  }
  
  onComplete() {
    this.duService.asyncVideoEmit.complete();
  }
}
