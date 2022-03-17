import { Component, OnInit } from '@angular/core';
import { interval, Subscription, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  //Subscriptions
  subs1: Subscription;
  subs2: Subscription;
  // Messages
  msg1;
  msg2;

  constructor(private _du: DesignUtilityService) { }

  ngOnInit(): void {

    const broadcastVideos = interval(1000);

    // Ex -01
    this.subs1 = broadcastVideos.pipe(
      map(data => 'video' + data))
      .subscribe(res => {
        //  console.log(+res);
        this.msg1 = res;
        
      })

    setTimeout(() => {
      this.subs1.unsubscribe();
    }, 10000)
    

    //Ex -02

    this.subs2 = broadcastVideos.pipe(
      map(data => data * 10))
      .subscribe(res => {
        // console.log(res);
        this.msg2 = res;
      })

    setTimeout(() => {
      this.subs2.unsubscribe();
    }, 10000)
  


    // Ex -03 using from operator we convert array into observable stream
    const members = from([

      { id: 1, name: 'sudarshan' },
      { id: 2, name: 'Vishal' },
      { id: 4, name: 'Nilesh'},
      { id: 5, name: 'Vijay'},
      { id: 3, name: 'Yash'},
      { id: 6, name: 'Ajay'},
      { id: 7, name: 'Ruturaj'},
  ])

    // let memObs = from(members); 
    members.pipe(
      map(data => data.name)
    )
      .subscribe(res => {
        // console.log(res);
        this._du.print(res, 'elContainer');
    })
    
    setTimeout(()=> {
      
    },10000)

  }










}
