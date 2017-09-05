import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    servers = [
        {
            name: 'Testserver',
            capacity: 10,
            id: this.generateId()
        },
        {
            name: 'Liveserver',
            capacity: 100,
            id: this.generateId()
        }
    ];

    constructor(private appService: AppService) {}

    onAddServer(name: string) {
        this.servers.push({
            name: name,
            capacity: 50,
            id: this.generateId()
        })
    }

    onGetServers() {
        this.appService.getServers()
            .subscribe(
                (servers: any[]) => {
                    console.log(servers);
                    this.servers = servers;
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    onSaveServers() {
        this.appService.storeServers(this.servers)
            .subscribe(
                (response) => { 
                    console.log(response);
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    private generateId(): number {
        return Math.round(Math.random() * 100000);
    }
}
