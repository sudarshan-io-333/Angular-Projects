import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//selector is used to identify each component uniquely into the component tree
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h3{
    color : dodgerblue;
  }
  `]
})
export class AppComponent {
  name = 'Sudarshan';
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test!' }];
  
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];



  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
     }
  }





  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }
  
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }




}
