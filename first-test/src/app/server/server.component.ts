import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: 'server.component.html',
    styleUrls: [ 'server.component.css' ]
})
export class ServerComponent {

    serverId: number = 0;
    serverOnline: boolean = false;

    constructor() {
        this.serverOnline = (Math.random() > 0.5) ? true : false;
    }
}