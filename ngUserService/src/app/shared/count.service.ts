import { Injectable } from '@angular/core';

@Injectable()
export class CountService {

    activeToInactiveCount: number = 0;
    inactiveToActiveCount: number = 0;

    constructor() { }

    getActiveToInactiveCount () {
        return this.activeToInactiveCount;
    }

    getInactiveToActiveCount () {
        return this.inactiveToActiveCount;
    }

    addToActiveToInactive() {
        this.activeToInactiveCount++;
        console.log("Active to Inactive count: " + this.activeToInactiveCount);
    }

    addToInactiveToActive() {
        this.inactiveToActiveCount++;
        console.log("Inactive to Active count: " + this.inactiveToActiveCount);
    }

}
