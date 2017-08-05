import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-username',
    templateUrl: './username.component.html',
    styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

    username: string;
    usernameFieldEmpty: boolean = true;

    constructor() { }

    ngOnInit() {
    }

    updateUsername(event: any) {
        this.username = event.target.value;
        this.usernameFieldEmpty = (!this.username.length);
    }

    resetUsername() {
        this.username = "";
    }

}
