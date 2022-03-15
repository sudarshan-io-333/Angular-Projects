import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent implements OnInit {

  constructor(private fb: FormBuilder) { }



  public count: number =0;
  // fb: FormBuilder;
  examDetails: { QuestionCategory: string, marks: number }

  disable = true;
  signupForm: FormGroup;
  ngOnInit() {
    this.signupForm = new FormGroup({
      // 'examDetail': new FormGroup({
      //   'QuestionCategory': new FormControl(null, Validators.required),
      //   'marks': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(5)])
      //   }),
      examName: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      'examKey': new FormControl(null, [Validators.required, Validators.maxLength(30), Validators.minLength(6)]),
      'examCategory': new FormControl(null, Validators.required),
      'examDuration': new FormControl(null, [Validators.required, Validators.min(10)]),
      'examDetailSet': this.fb.array([
        this.onAddCategory()
      ])
    });
    console.log(this.signupForm.value);
  }



  onSubmit() {

    console.table(this.signupForm.value);
  }

  onAddCategory(): FormGroup {
    // const controls = new FormControl('null', Validators.required);
    // const controlMark = new FormControl('null', Validators.required);
    // (<FormArray>this.signupForm.get('examDetailSet')).push(controlMark);
    // (<FormArray>this.signupForm.get('examDetailSet')).push(controls);
    return this.fb.group({
      'questionCategory': ['', Validators.required],
      'marks': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]]
    });
  }

  onAddDetail() {
    
    this.disable = false;
    console.log("Count" + this.count);
    (<FormArray>this.signupForm.get('examDetailSet')).push(this.onAddCategory());
    this.count = this.count + 1;
    console.log(this.count);
  }

  // onAddMarks() {

  // }

  getControls() {
    return (<FormArray>this.signupForm.get('examDetailSet')).controls;
  }

  onDeleteDetails(i: number) {
    
    if (!this.count ) {
      this.disable = true;
    }
    else if(this.count > 0){
      this.count--;
      console.log(i);
       return (<FormArray>this.signupForm.get('examDetailSet')).removeAt(i);
      // return (<FormArray>this.signupForm.get('examDetailSet')).controls.pop();
    }
  }

  //  formObject = {

  //   examName: this.signupForm.value.examName,
  //   examKey: this.signupForm.value.examKey,
  //   examCategory: this.signupForm.value.examCategory,
  //    examDuration: this.signupForm.value.examDuration,
  //    questionCategory: this.signupForm.value.examDetailSet.questionCategory,
  //    marks: this.signupForm.value.examDetailSet.marks,
  // } 



//    formValue = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(this.signupForm.value);
//   }, 2000);
// })

//   formContent = document.getElementById('formContent');

//   fetchData() {
//     this.formContent.innerText ='fetching data..';

//     this.formValue.then(data => {
//       console.log(data);
//       this.formContent.innerText = JSON.stringify(data);
//       console.log('formcontent', this.formContent);
//     })

//   }

  // value = JSON.stringify(this.formValue);
  
}

