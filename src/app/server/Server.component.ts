import { Component } from '@angular/core'; // here @component decorator is known 
//to typescript, so when it parses this file +and compiles it to javascript its able
//to understand it

@Component({
    selector: 'app-server',
    templateUrl: './Server.component.html',
    styles: [`
        .online{
            color:white;
        }
    `]
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = 'Offline';

    constructor() {
        this.serverStatus =Math.random()>0.5 ? 'online' : 'offline'
    }
    getServerStatus() {
        return this.serverStatus;
    }
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
    }
