import { Component, OnInit } from '@angular/core';
import { interval, Subscription, from, of } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  users = [
    { name: 'Sudarshan', Skill: 'Angular' },
    { name: 'Mayur', Skill: 'HTML,CSS' },
    { name: 'Yash', Skill: 'Javascript' },
    { name: 'Aakash', Skill: 'Python' },
  ]

  constructor() { }
  sourceSub: Subscription;
  

  ngOnInit(): void {

    // Ex -01 (convert observable stream to array using toArray() and take())

    const source = interval(1000);
    this.sourceSub = source.pipe(take(5),toArray())
      .subscribe(res => {
      // console.log(res);
      // if (res >= 8) {
      //   this.sourceSub.unsubscribe();
      // }
      })
    
    //Ex-02 (convert array to observable stream using from operator)

    const source2 = from(this.users)
    
    source2
      .subscribe(res => {
      // console.log(res);
      })
    
    //Ex-03

    const source3 = of('Sudarshan', 'Pandurang', 'Gajdhane');
    source3.pipe(toArray()).subscribe(res => {
      console.log(res);
    })
    
    
    
    
    
  }

  



}
