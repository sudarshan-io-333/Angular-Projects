import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  username: string;

  constructor(private _du: DesignUtilityService) { 
    this._du.username.subscribe(res => {
      this.username = res;
    })
  }

  ngOnInit(): void {
  }

  onChange(uname) {
    this._du.username.next(uname.value);
  }
}
