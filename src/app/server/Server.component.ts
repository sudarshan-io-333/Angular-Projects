import { Component } from '@angular/core'; // here @component decorator is known 
//to typescript, so when it parses this file +and compiles it to javascript its able
//to understand it

@Component({
    selector: 'app-server',
    templateUrl :'./Server.component.html' 
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = 'Offline';

    getServerStatus() {
        return this.serverStatus;
    }
    
    }
