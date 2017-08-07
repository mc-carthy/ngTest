import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

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
    @ViewChild('serverContentInput') serverContentInput: ElementRef;

    constructor() { }

    ngOnInit() {
    }

    onAddServer(serverNameInput: HTMLInputElement) {
        this.serverCreated.emit({
            // serverName: this.newServerName, 
            serverName: serverNameInput.value,
            // serverContent: this.newServerContent 
            serverContent: this.serverContentInput.nativeElement.value 
        });
    }

    onAddBlueprint() {
        // this.blueprintCreated.emit({
        //     blueprintName: this.newServerName, 
        //     blueprintContent: this.newServerContent 
        // });
    }

}
