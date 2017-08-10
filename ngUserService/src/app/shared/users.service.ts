import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor() { }

    getActiveUsers() {
        return this.activeUsers;
    }
    
    getInactiveUsers() {
        return this.inactiveUsers;
    }

    moveFromActiveToInactive(name: string) {
        const userToBeMoved = this.activeUsers.indexOf(name);
        this.inactiveUsers.push(this.activeUsers[userToBeMoved]);
        this.activeUsers.splice(userToBeMoved, 1);
    }
    
    moveFromInactiveToActive(name: string) {
        const userToBeMoved = this.inactiveUsers.indexOf(name);
        this.activeUsers.push(this.inactiveUsers[userToBeMoved]);
        this.inactiveUsers.splice(userToBeMoved, 1);
    }

}
