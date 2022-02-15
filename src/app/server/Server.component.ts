import { Component } from '@angular/core'; // here @component decorator is known 
//to typescript, so when it parses this file +and compiles it to javascript its able
//to understand it

@Component({
    selector: 'app-server',
    templateUrl :'./server.compnent.html' 


})
export class ServerComponent{
    
    }
