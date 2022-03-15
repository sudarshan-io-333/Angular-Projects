import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { map, catchError ,startWith} from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './posts.service';
import { Subscription } from 'rxjs';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { CustomValidators } from './custom-validators';

// import { UserService } from './user/user.service';
// import { Subscription } from 'rxjs';
// import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

// import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';

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
export class AppComponent implements OnInit, OnDestroy {


  // Forms -Assignment
  // signupForm: FormGroup;
  // examArray = [''];

 //--------------------  Angular Material --------------------

  
  options: string[] = ['Angular', 'React', 'Vue'];
  objectOptions = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'React' },
    { name: 'Vue' }
  ];

  displayFn(subject) {
    return subject ? subject.name : undefined;
 }

myControl = new FormControl()
  filteredOptions: Observable<string[]>;




  
  // notifications = 2;
  // showSpinner = false;
  selectedValue: string;

  // loadData() {
  //   this.showSpinner = true;
  //   setTimeout(( )=> {
  //     this.showSpinner = false;
  //   }, 5000);
  // }

  // opened = false;
  // log(state) {
  //   console.log(state);
  // }

  logChange(index) {
    console.log(index);
  }












  

  // ==========================       Http - Firebase            =================

  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  private errorSub: Subscription;

  constructor(private http: HttpClient,
              private postService: PostService) { }
  
  ngOnInit() { 

    this.errorSub = this.postService.fetchPosts().subscribe(errorMessage => {
      this.error = errorMessage;
    });

    // this.fetchPosts();
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(
      posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
      }, error => {
        this.isFetching = false;
      this.error = error.message;
      // console.log(error);
    });
  }

  onCreatePost(postData: Post)
  {
    this.postService.createAndStorePost(postData.title, postData.content);
    //send Http request
    // this.http
    //   .post<{name :string}>('https://ng-complete-guide-2fb4c-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
    //     postData
    //   ).subscribe(responseData => {
    //     console.log(responseData);
    //   });

    
    
  }
  


  onFetchPosts() {
    
    // this.fetchPosts();
    // this.postService.fetchPosts();
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePost().subscribe(() => {
      this.loadedPosts = [];
    });
  }


  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
}



  // private fetchPosts() {
  //   this.isFetching = true;
    // this.http
    //   .get<{[key:string]: Post}>('https://ng-complete-guide-2fb4c-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
    //   .pipe(map(responseData =>{
    //     const postsArray : Post[] = [];
    //     for (const key in responseData) {
    //       if (responseData.hasOwnProperty(key)) {
    //         postsArray.push({ ...responseData[key], id: key })
    //       }
    //     }
    //     return postsArray;
    //   }))
    //   .subscribe(posts => {
    //     this.isFetching = false;
    //     this.loadedPosts = posts;
    //   });
  // }
}


  // -------------------------------  PIPES ----------------

//   appStatus = new Promise((resolve, response) => {
//     setTimeout(() => {
//       resolve('stable');
//     },2000);
//   });




//   servers = [
//     {
//       instanceType: 'medium',
//       name: 'Production Server',
//       status: 'stable',
//       started: new Date(15, 1, 2017)
//     },
//     {
//       instanceType: 'large',
//       name: 'User Database',
//       status: 'stable',
//       started: new Date(15, 1, 2017)
//     },
//     {
//       instanceType: 'small',
//       name: 'Development Server',
//       status: 'offline',
//       started: new Date(15, 1, 2017)
//     },
//     {
//       instanceType: 'small',
//       name: 'Testing Environment Server',
//       status: 'stable',
//       started: new Date(15, 1, 2017)
//     }
//   ];

//   filteredStatus = '';
//   getStatusClasses(server: { instanceType: string, name: string, status: string,
//     started: Date}) {
//     return {
//       'list-group-item-success': server.status === 'stable',
//       'list-group-item-warning': server.status === 'offline',
//       'list-group-item-danger': server.status === 'critical'
//     };
//   }

//   onAddServer() {
//     this.servers.push({
//       instanceType: 'small',
//       name: 'New Server',
//       status: 'stable',
//       started: new Date(15, 1, 2017)
//     });
//   }
//  }









  // -------------------------------   Assignment 7 ----------------

  // ProjectForm: FormGroup;

  // ngOnInit() {
  //   this.ProjectForm = new FormGroup({
  //     'projectName': new FormControl(
  //       null,
  //       [Validators.required, CustomValidators.invalidProjectName],
  //       CustomValidators.asyncInvalidProjectName),
  //     'email': new FormControl(null, [Validators.required, Validators.email]),
  //     'projectStatus': new FormControl('critical')
  //   });
  // }
  
  // onSaveProject() {
  //   console.log(this.ProjectForm.value);
  // }



  // ------------------------------  Reactive form   ------------------

  //   genders = ['male', 'female'];
  //   signupForm: FormGroup;
  //   forbiddenUsernames = ['Chris', 'Anna'];

  //   ngOnInit() { 
  //     this.signupForm = new FormGroup({
  //           'userData': new FormGroup({
  //             'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
  //             'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
  //           }),
  //           'gender': new FormControl('male'),
  //           'hobbies': new FormArray([])
  //         });
    
  //     }
  //   onSubmit() {
  //     console.log(this.signupForm);
  //   }

  //   onAddHobby() {
  //     const control = new FormControl(null,Validators.required);
  //     (<FormArray>this.signupForm.get('hobbies')).push(control);
  //   }

  //   getControls() {
  //     return (<FormArray>this.signupForm.get('hobbies')).controls;
  //   }

  //   forbiddenNames(control: FormControl): { [s: string]: boolean }{
  //     if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
  //       return { 'nameIsForbidden': true };
  //     }
  //     return null;
  //   }

  //   forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
  //     const promise = new Promise<any>((resolve, reject) => {
  //       setTimeout(() => {
  //       if (control.value === 'test@test.com') {
  //         resolve({'emailIsForbidden': true });
  //       } else {
  //         resolve(null);
  //         }      
  //     }, 1500);
  //   });
  //   return promise;
  // }
  // }

  // ---------------------------------   template driven form -------------------------------

  


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


 
  
