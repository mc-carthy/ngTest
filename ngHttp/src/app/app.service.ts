import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

    constructor(private http: Http) { }

    storeServers (servers: any[]) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(
            'https://nghttp-ea652.firebaseio.com/data.json', 
            servers, 
            { headers: headers }
        );
    }
}