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
    user = {
        username: '',
        email: '',
        secretQuestion: '',
        secretAnswer: '',
        gender: ''
    }
    submitted: boolean = false;

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
        this.user.username = this.singupForm.value.userData.username;
        this.user.email = this.singupForm.value.userData.email;
        this.user.secretQuestion = this.singupForm.value.secret.secretQuestion;
        this.user.secretAnswer = this.singupForm.value.secret.secretAnswer;
        this.user.gender = this.singupForm.value.gender;
        this.submitted = true;
    }
    //   onSubmit(form: NgForm) {
    //       console.log(form);
    //   }
}
