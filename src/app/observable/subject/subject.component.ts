import { Component, OnInit, OnDestroy } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {

  username:string;
  constructor(private _du: DesignUtilityService) {
    this._du.username.subscribe(res =>{
      this.username = res;
    })
   }

  ngOnInit(): void {
    this._du.exclusive.next(true);
  }

  ngOnDestroy() {
    this._du.exclusive.next(false);
  }
}
