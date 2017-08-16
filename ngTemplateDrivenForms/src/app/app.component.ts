import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    @ViewChild('f') singupForm: NgForm;
    defaultQuestion: string = 'pet';
    answer: string;
    genders = ['male', 'female'];

    suggestUserName() {
        const suggestedName = 'Superuser';
        // this.singupForm.setValue({
        //     userData: {
        //         username: 'Superuser',
        //         email: ''
        //     },
        //     secret: {
        //         secretQuestion: 'pet',
        //         secretAnswer: '',
        //     },
        //     gender: 'male'
        // });
        this.singupForm.form.patchValue({
            userData: {
                username: 'SuperUser'
            }
        });
    }

    onSuggestUsername() {
        this.suggestUserName();
    }

    onSubmit() {
        console.log(this.singupForm);
    }
    //   onSubmit(form: NgForm) {
    //       console.log(form);
    //   }
}
