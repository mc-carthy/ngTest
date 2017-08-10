import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

    constructor() { }

    logStatusChange(status: string) {
        console.log('A server status has been changed, new status ' + status);
    }

}
