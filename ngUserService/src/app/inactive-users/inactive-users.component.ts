import { Component, OnInit } from '@angular/core';
import { UsersService } from './../shared/users.service';
import { CountService } from './../shared/count.service';

@Component({
    selector: 'app-inactive-users',
    templateUrl: './inactive-users.component.html',
    styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
    users: string[];

    count: number;

    constructor(
        private usersService: UsersService,
        private countService: CountService
    ) { }

    ngOnInit () {
        this.users = this.usersService.getInactiveUsers();
        this.count = this.countService.getInactiveToActiveCount()
    }

    onSetToActive(name: string) {
        this.usersService.moveFromInactiveToActive(name);
        this.countService.getInactiveToActiveCount();
    }
}
