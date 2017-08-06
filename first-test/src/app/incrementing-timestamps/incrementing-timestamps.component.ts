import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-incrementing-timestamps',
    templateUrl: './incrementing-timestamps.component.html',
    styleUrls: ['./incrementing-timestamps.component.css']
})
export class IncrementingTimestampsComponent implements OnInit {

    showDetails: boolean = false;
    inputs = [];

    constructor() { }

    ngOnInit() {
    }

    toggleDetails() {
        this.showDetails = !this.showDetails;
        this.inputs.push(new Date());
    }

}
