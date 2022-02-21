import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  username = '';
  allowNewServer = false;
  ServerCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  Secretespassword = false;
  clickLog = [];
  timestamp: number = 0;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit(): void {
  }
 
  onToggleDisplay() {
    // this.clickLog.push(this.timestamp++);
    this.clickLog.push(new Date()); //Date is inbuilt object, Javascript ships with so no need to import.
  }
  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.ServerCreationStatus = 'server was created! Name is' + this.serverName;
  }
  
}
