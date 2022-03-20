import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { map, mergeMap, switchAll, delay, switchMap, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  getData(data) {
    return of(data + ' Video Uploaded').pipe(delay(1000));
  }
  constructor(private duService: DesignUtilityService) { }

  ngOnInit(): void {

    const source = from(['Tech', 'Comedy', 'News']);

    // Ex -01 | Map

    // source.pipe(
    //   map(res => this.getData(res))
    // )
    //   .subscribe(res => res.subscribe(res2 => {
    //      console.log(res2)
    //     this.duService.print(res2, 'elContainer')
    //   }))

    // Ex - 02 | Map + SwitchAll
    //  switchAll operator gives latest/last request value .
    // It rejects all previous request.In case of our case Tech and Comedy both are reject and News request will be execute.
    // source.pipe(
    //   map(res => this.getData(res)),
    //   switchAll()
    // ).subscribe(res => {
    //    console.log(res);
    //   this.duService.print(res, 'elContainer2')
    // })

    // Ex - 03 | Switch-Map = Map + SwitchAll. It is a flattening operator means subscription inside another subscription.
    //  here instead of map and SwitchAll operator we directly use switchMap.
    // it gives same result and avoids multiple operator use and also multiple time subscription.
    // source.pipe(
    //   switchMap(res => this.getData(res)),
    // ).subscribe(res => {
    //   console.log(res);
    //   this.duService.print(res, 'elContainer3')
    // })



    // -------------- Diff betn Mergemap, Concatmap and SwitchMap


    // Ex - 01 | Mergemap
   //  Jab hume sare emission ka data flatt karke screen par dikhana hota hai aur every
    // new observable ko subscribe karke data chahiye then we use 'Mergemap'.
    source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res =>{
        //console.log(res);
        this.duService.print(res, 'elContainer')
      })
    
    // Ex - 2 | Concatmap
   // jab humare liye order matter karti hai means jis order se insert kiya hai usi order
  // order se data chahiye then we use 'Concatmap'.
    source.pipe(
      concatMap(res => this.getData(res))
    ).subscribe(res =>{
        console.log(res)
        this.duService.print(res, 'elContainer2')
      })
    
    // Ex - 3 | Switchmap
  //  jab hume previous emission ko unsubscribe karke sirf latest emission ka hi result
    // chahiye then we use 'Switchmap'.
    source.pipe(
      switchMap(res => this.getData(res))
    )
      .subscribe(res =>{
        console.log(res)
        this.duService.print(res, 'elContainer3')
      })
  }
  }