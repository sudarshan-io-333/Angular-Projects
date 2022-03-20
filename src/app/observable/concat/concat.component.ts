import { Component, OnInit } from '@angular/core';
import { interval, concat } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor(private duService:DesignUtilityService) { }

  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(map(v => 'Tech Video #' + (v + 1)), take(5));
    const sourceComedy = interval(1000).pipe(map(v => 'Comedy Video #' + (v + 1)), take(3));
    const sourceNews = interval(1000).pipe(map(v => 'News Video #' + (v + 1)), take(4));

    const finalObs = concat(sourceTech, sourceComedy, sourceNews)
    finalObs.subscribe(res => {
      this.duService.print(res, 'elContainer');
    })
  }

}
