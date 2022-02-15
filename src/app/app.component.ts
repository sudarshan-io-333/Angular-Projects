import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//selector is used to identify each component uniquely into the component tree
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Sudarshan';
}
