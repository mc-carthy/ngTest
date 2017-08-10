import { Component } from '@angular/core';
import { UsersService } from './shared/users.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    activeUsers: string[] = [];
    inactiveUsers: string[] = [];

    constructor(private usersService: UsersService) {}

    ngOnInit() {
        this.activeUsers = this.usersService.getActiveUsers();
        this.inactiveUsers = this.usersService.getInactiveUsers();
    }
}
