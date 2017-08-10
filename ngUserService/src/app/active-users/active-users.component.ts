import { Component, OnInit } from '@angular/core';
import { UsersService } from './../shared/users.service';

@Component({
    selector: 'app-active-users',
    templateUrl: './active-users.component.html',
    styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
    users: string[];

    constructor(
        private usersService: UsersService,
    ) { }

    ngOnInit () {
        this.users = this.usersService.getActiveUsers()
    }

    onSetToInactive(name: string) {
        this.usersService.moveFromActiveToInactive(name);
    }
}
