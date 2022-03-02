import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
// import { UserService } from './user/user.service';
// import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',//selector is used to identify each component uniquely into the component tree
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
  // styles: [`
  // h3{
  //   color : dodgerblue;
  // }
  // `]
})
export class AppComponent implements OnInit {

  // ------------------------------  Reactive form   ------------------

  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() { }
  //   this.signupForm = new FormGroup({
  //     'userData': new FormGroup({
  //       'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
  //       'email': new FormControl(null, [Validators.required, Validators.email])
  //     }),
  //     'gender': new FormControl('male'),
  //     'hobbies': new FormArray([])
  //   });
  // }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  // forbiddenNames(control: FormControl): { [s: string]: boolean }{
  //   if (this.forbiddenNames.indexOf(control.value) !== -1) {
  //     return { 'nameIsForbidden': true };
  //   }
  //   return null;
  // }

  }
















  // answer = '';
  // userActivated = false;
  
  
  // user = {
  //   username: '',
  //   email: '',
  //   secretQuestion: '',
  //   answer: '',
  //   gender: ''
  // };

  // private activatedSub: Subscription;

  // defaultQuestion = 'pet';

  // submitted = 'false';

  // @ViewChild('f') signupForm: NgForm;

  // suggestedUserName() {
  //   const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    //use patchValue for change on specific form-control
//     this.signupForm.form.patchValue({
//       userData: {
//         username: suggestedName
//       }
//     })
// }

  // name = 'Sudarshan';
  // serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test!' }];
  // onlyOdd: number[]=[1,3,5,6];

  // oddNumbers: number[] = [];
  // evenNumbers: number[] = [];

  // constructor(private userService:UserService){}

  // ngOnInit() { }
  //   this.activatedSub=this.userService.activatedEmitter.subscribe(didActivate => {
  //     this.userActivated = didActivate;
  //   })
  // }

  // ngOnDestroy() { }
  //   this.activatedSub.unsubscribe();
  // }
  // onIntervalFired(firedNumber: number) {
  //   if (firedNumber % 2 === 0) {
  //     this.evenNumbers.push(firedNumber);
  //   } else {
  //     this.oddNumbers.push(firedNumber);
  //    }
  // }

  // onServerAdded(serverData:{serverName:string,serverContent:string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }

  // onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //   });
  // }
  // onChangeFirst() {
  //   this.serverElements[0].name = 'Changed!';
  // }
  
  // onDestroyFirst() {
  //   this.serverElements.splice(0, 1);
  // }

  // onSubmit(form:NgForm) {
  //   console.log(form);
  // }

  // onSubmit(form: NgForm) {
    //  console.log(this.signupForm);
  //   this.submitted = 'true';
  //   this.user.username = this.signupForm.value.userData.username;
  //   this.user.email = this.signupForm.value.userData.email;
  //   this.user.secretQuestion = this.signupForm.value.secret;
  //   this.user.answer = this.signupForm.value.questionAnswer;
  //   this.user.gender = this.signupForm.value.gender;

  //   this.signupForm.reset(); // for reset all values
  //  }


  
