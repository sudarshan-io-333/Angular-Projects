import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, concatAll, delay, concatMap, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor(private duService: DesignUtilityService) { }

  getData(data) {
    return of(data + 'Video Uploaded').pipe(delay(2000));
  }

  ngOnInit(): void {

    const source = from(['Tech', 'Comedy', 'News']);

    // Ex 01 | Map
    source.pipe(
      map(res => this.getData(res))
    )
      .subscribe(res =>{
        console.log(res)
        this.duService.print(res, 'elContainer')
      })
    
    // Ex 02 | Map + ConcatAll
    // source.pipe(
    //   map(res => this.getData(res)),
    //   concatAll()
    // )
    //   .subscribe(res =>{
    //     console.log(res)
    //     this.duService.print(res, 'elContainer2')
    //   })

    // Ex 03 | Map + ConcatAll
    source.pipe(
      mergeMap(res => this.getData(res)),
    )
      .subscribe(res =>{
        console.log(res)
        this.duService.print(res, 'elContainer2')
      })
    
    // Ex 03 | ConcatMap = Map + ConcatAll
    source.pipe(
      concatMap(res => this.getData(res)),
    )
      .subscribe(res => {
        console.log(res)
        this.duService.print(res, 'elContainer3')
      })
    
    
    
    
  }
}