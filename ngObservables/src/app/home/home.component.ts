import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from "rxjs/Observer";
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    numbersSubscription: Subscription
    customObservableSubscription: Subscription

    constructor() { }

    ngOnInit() {
          const myNumbers = Observable.interval(1000);
          this.numbersSubscription = myNumbers.subscribe(
              (number: number) => {
                  console.log(number);
              }
          );

        const myObservable = Observable.create((observer: Observer<string>) => {
            setTimeout(() => {
                observer.next('First package');
            }, 2000);
            setTimeout(() => {
                observer.next('Second package');
            }, 4000);
            // setTimeout(() => {
            //     observer.error('This is an error');
            // }, 5000);
            setTimeout(() => {
                observer.complete();
            }, 5000);
            // This will not get sent as the observable has already completed
            setTimeout(() => {
                observer.next('Third package');
            }, 6000);
        });

        this.customObservableSubscription = myObservable.subscribe(
            (data: string) => {
                console.log(data);
            },
            (error: string) => {
                console.log(error);
            },
            () => {
                console.log('Completed');
            }
        );
    }

    ngOnDestroy() {
        this.numbersSubscription.unsubscribe();
        this.customObservableSubscription.unsubscribe();
    }

}
