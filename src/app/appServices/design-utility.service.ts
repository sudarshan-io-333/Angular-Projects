import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }
  
  print(val, containerId) {
    let e1 = document.createElement('li');
    e1.innerText = val;
    document.getElementById(containerId).appendChild(e1);
  }
}
