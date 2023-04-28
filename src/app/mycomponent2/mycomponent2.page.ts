import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mycomponent2',
  templateUrl: './mycomponent2.page.html',
  styleUrls: ['./mycomponent2.page.scss'],
})
export class Mycomponent2Page {
  public myForm: FormGroup;
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }
  constructor(private formBuilder: FormBuilder) {
    this.myForm= formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]]
    })
  }
    
  get m(){
    return this.myForm.controls;
  }
  onSubmit(){
    console.log(this.myForm.value);
  }

  getName(){
    alert("You Register Successfully !!")
   }
}