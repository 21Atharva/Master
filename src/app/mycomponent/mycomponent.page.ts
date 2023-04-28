import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.page.html',
  styleUrls: ['./mycomponent.page.scss'],
})
export class MycomponentPage {
  public myForm: FormGroup;
  submitted = false;
  ngOnInit(): void {
   
  }
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]]
    })
  }
    
  get m(){
    return this.myForm.controls;
  }
   
  onSubmit(){
    console.log(this.myForm.value);
  }

   email='';
   
   getOtp(){
    alert("OTP Generated Successfully !!")
   }
}
