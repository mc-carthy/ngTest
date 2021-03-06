import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    genders: string[] = ["male", "female"];
    signupForm: FormGroup;
    forbiddenUsernames = ['Mick', 'Test'];

    ngOnInit() {
        this.signupForm = new FormGroup({
            'userData': new FormGroup({
                'username': new FormControl(null, [Validators.required, this.isNameForbidden.bind(this)]),
                'email': new FormControl(null, [Validators.required, Validators.email], this.isEmailForbidden.bind(this)),
            }),
            'gender': new FormControl('male'),
            'hobbies': new FormArray([])
        });
        // this.signupForm.valueChanges.subscribe(
        //     (value) => console.log(value)
        // );
        // this.signupForm.statusChanges.subscribe(
        //     (status) => console.log(status)
        // );
    }

    onSubmit() {
        console.log(this.signupForm);
        this.signupForm.reset({
            'gender': 'male'
        });
    }

    onAddHobby() {
        const control = new FormControl(null, Validators.required);
        (<FormArray>this.signupForm.get('hobbies')).push(control);
    }

    onPopulateForm() {
        this.signupForm.setValue({
            'userData': {
                'username': 'Test username',
                'email': 'test@testing.com'
            },
            'gender': 'female',
            'hobbies': []
        });
        this.setHobbies(['Testing', 'Developing', 'Creating bugs'])
    }

    onChangeUsername() {
        this.signupForm.patchValue({
            'userData': {
                'username': 'Test Username'
            }
        });
    }

    setHobbies(hobbies: String[]) {
        for (const hobby of hobbies) {
            (<FormArray>this.signupForm.get('hobbies')).controls.push(new FormControl(hobby, Validators.required));
        }
    }

    isNameForbidden(control: FormControl): {[s: string]: boolean} {
        if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
            return {'nameIsForbidden': true};
        }
        return null;
    }

    isEmailForbidden(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'test@test.com') {
                    resolve({'emailIsForbidden': true});
                } else {
                    resolve(null);
                }
            }, 1500);
        });
        return promise;
    }
}
