import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

    @Output('server-created') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    @Output('blueprint-created') blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();
    
    newServerName = '';
    newServerContent = '';

    constructor() { }

    ngOnInit() {
    }

    onAddServer(serverNameInput: HTMLInputElement) {
        this.serverCreated.emit({
            serverName: this.newServerName, 
            serverContent: this.newServerContent 
        });
    }

    onAddBlueprint() {
        this.blueprintCreated.emit({
            blueprintName: this.newServerName, 
            blueprintContent: this.newServerContent 
        });
    }

}
