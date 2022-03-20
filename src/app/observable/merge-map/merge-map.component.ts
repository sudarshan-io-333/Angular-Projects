import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  getData(data) {
    return of(data + ' Video Uploaded')
  }
  constructor(private duService:DesignUtilityService) { }

  ngOnInit(): void {
    // Ex -01 | Map
     //  here we subscribe twise.if we subscribe only once then it returns an observable.
    const source = from(['Tech', 'Comedy', 'News']);
    source.pipe(
      map(res => this.getData(res))
    )
      .subscribe(res => res.subscribe(res2 => {
        // console.log(res2)
        this.duService.print(res2, 'elContainer')
      }))
     
    // Ex - 02 | Map + MergeAll
    //  here no need to subscribe twise because of mergeAll operator.
    // It gives us all internal observable values and gives same result
    // if we use only map and not use mergeAll then it return an observable.
    source.pipe(
        map(res => this.getData(res)),
        mergeAll()
    ).subscribe(res => {
      // console.log(res);
      this.duService.print(res, 'elContainer2')
      })
    
    // Ex - 03 | Merge-Map = Map + MergeAll. It is a flattening operator means subscription inside another subscription.
    //  here instead of map and mergeAll operator we directly use mergeMap.
    // it gives same result and avoids multiple operator use and also multiple
    // time subscription.
    source.pipe(
      mergeMap(res => this.getData(res)),
    ).subscribe(res => {
      console.log(res);
      this.duService.print(res, 'elContainer3')
    })
    }
  }

