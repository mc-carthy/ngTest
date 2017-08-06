import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    allowNewServer: boolean = false;
    serverCreated: boolean = false;
    serverCreationStatus: string = 'No server was created!';
    serverName: string = "";

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 3000);
     }

    ngOnInit() {
    }

    onCreateServer() {
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
        this.serverCreated = true;
    }

    onUpdateServerName(event: any)
    {
        this.serverName = event.target.value;
    }

}
