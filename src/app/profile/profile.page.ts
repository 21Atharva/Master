import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage  {
  public myForm: FormGroup;
  
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


  email=''
getUpdate(){
  alert("Profile Update SuccessFully!!")
}
}
