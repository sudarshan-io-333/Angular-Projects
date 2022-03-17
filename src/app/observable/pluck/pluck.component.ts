import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, toArray, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  data;
  data2;
  
  constructor() { }

  users =  [
    {
      name: 'Sudarshan',
      skills: 'Angular',
      Job: {
        title: 'Frontend Developer',
        Exp:'10 Y'
      }
    },
    {
      name: 'Mahesh',
      skills: 'HTML',
      Job: {
        title: 'Business Analyst',
        Exp: '5 Y'
      }
    },
    {
      name: 'Ajay',
      skills: 'Python',
      Job: {
        title: 'Backend Developer',
        Exp: '12 Y'
      }
    },
    {
      name: 'Rajesh',
      skills: 'C++',
      Job: {
        title: 'Block-chain Developer',
        Exp: '8 Y'
      }
    }
  ]

  ngOnInit(): void {

    from(this.users).pipe(
      // map(data => data.name),    //we can use pluck instead of map operators, it gives same result.
       pluck('skills'),
       toArray()
     )
     .subscribe(res => {
        console.log(res);
        this.data = res;
      })
    
    // Ex - 03

    from(this.users).pipe( 
        pluck('Job','title'),
        toArray()
    )
      .subscribe(res => {
        this.data2 = res;
    })








  }

}
