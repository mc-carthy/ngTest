import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AppService {

    constructor(private http: Http) { }

    getServers() {
        return this.http.get('https://nghttp-ea652.firebaseio.com/data.json')
            .map((response: Response) => {
                const data = response.json();
                return data;
            })
            .catch((error: Response) => {
                console.log(error);
                return Observable.throw('Something went wrong');
            });
    }

    storeServers (servers: any[]) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.put(
            'https://nghttp-ea652.firebaseio.com/data.json', 
            servers, 
            { headers: headers }
        );
        // return this.http.post(
        //     'https://nghttp-ea652.firebaseio.com/data.json', 
        //     servers, 
        //     { headers: headers }
        // );
    }
}