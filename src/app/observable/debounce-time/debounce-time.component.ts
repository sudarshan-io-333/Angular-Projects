import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit,AfterViewInit {

  @ViewChild('myInput') myInput: ElementRef;
  @ViewChild('myInput2') myInput2: ElementRef;
  reqData = null;
  reqData2 = null;
  constructor(private loadingBar : LoadingBarService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //Ex -01
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup')
    .pipe(
      map( event => event.target.value),
      debounceTime(500)
    )
      .subscribe(res => {
        console.log(res);
        this.reqData = res;
        this.loadingBar.start();

        setTimeout(() => {
          this.reqData = null;
          this.loadingBar.stop();
        },1000)
      })
    
    //Ex -02 DistinctuntilChanged
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(res => {
        console.log(res);
        this.reqData2 = res;
        this.loadingBar.start();

        setTimeout(() => {
          this.reqData2 = null;
          this.loadingBar.stop();
        }, 1000)
      })
    
    
    

    

    
    
    
    

    
    
    

    
    
    
    
    
    
    
    
  }
}
