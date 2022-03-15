import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  obsMsg;
  constructor(private _designUtility: DesignUtilityService ) { }

  ngOnInit(): void {

    //OF

    const obs = of('Sudarshan', 'Pandurang', 'Gajdhane');

    obs.subscribe(res => {
      // console.log(res);
      this._designUtility.print(res, 'elContainer');
    })

    const obs2 = of({ first:'Sudarshan', middle:'Pandurang', last:'Gajdhane'});

    obs2.subscribe(res => {
      this.obsMsg = res;
      // console.log(res);
      // this._designUtility.print(res, 'elContainer');
    })

    //from

    const Obs3 = from(['Alex', 'John', 'Blue']);

    Obs3.subscribe(res => {
      // console.log(res);
      this._designUtility.print(res,'elContainer3')
    })

   // From - Promise

    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise Resolved');
      },3000) 
    })

    const Obs4 = from(promise);

    Obs4.subscribe(res => {
      // console.log('from Promise =>' +res);
      this._designUtility.print(res, 'elContainer4')
    })
      
      //From -string
    
    const Obs5 = from('Welcome to Programmers.io');

    Obs5.subscribe(res => {
      console.log('from String =>' + res);
      this._designUtility.print(res, 'elContainer5')
    })
      
  }


}
