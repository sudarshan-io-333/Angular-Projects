import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { pluck, toArray, filter } from 'rxjs/operators';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  datArr = [
    { id: 1, name: 'Sudarshan', gender:'Male'},
    { id: 2, name: 'John', gender: 'Male' },
    { id: 3, name: 'Marry', gender: 'Female' },
    { id: 4, name: 'Alexa', gender: 'Female' },
    { id: 5, name: 'Sakshi', gender: 'Female' },
    { id: 6, name: 'Vishal', gender: 'Male' },
    { id: 7, name: 'Robert', gender: 'Male'},
    { id: 8, name: 'Priyanka', gender: 'Female'},
    { id: 9, name: 'Jagdish', gender: 'Male' },
    { id: 10, name: 'Pradeep', gender: 'Male' },
    { id: 11, name: 'Monika', gender: 'Female' },
    { id: 12, name: 'Sonali', gender: 'Female' }
  ];


  data;
  data2;
  data3;
  constructor() { }

  ngOnInit(): void {

    const source = from(this.datArr);

    // Ex - 01
    source.pipe(
       filter(member => member.name.length >6),
      toArray()
    )
      .subscribe(res => {
      // console.log(res);
        this.data = res;
      })
    
    
    // Ex -02
    source.pipe(
      filter(member => member.gender == 'Male'),
      toArray()
    )
      .subscribe(res => {
        // console.log(res);
        this.data2 = res;
      })
    
    
    // Ex - 03  by nth item
    source.pipe(
      filter(member => member.id >=6),
      toArray()
    )
      .subscribe(res => {
        // console.log(res);
        this.data3 = res;
      })
    
    
  }

}
