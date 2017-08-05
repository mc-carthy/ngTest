import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: 'server.component.html',
    styleUrls: [ 'server.component.html' ]
})
export class ServerComponent {

    serverId: number = 0;
    serverStatus: boolean = false;
}