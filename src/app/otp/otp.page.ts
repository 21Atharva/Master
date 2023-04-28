import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval,Subscription } from 'rxjs';
import { timer } from 'rxjs';
const counter = timer(0, 1000);
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})

  export class OtpPage implements OnInit  {
    ngOnInit(): void {
     this.subscribtion=this.source.subscribe(()=>this.numDecrement(this.num))
    }
    // firstName=" "; 
num=10;
    subscribtion: Subscription;
    source= interval(1000)
    numDecrement(numReceived:number){
      
      if(this.num > 0){
        this.num--;
      }    
    
      
    } 
    
    // getOtp(){
    //   alert("OTP Generated Successfully !!")
      
    //  }
    getName(){
      alert("You Login Successfully !!")
     }
  } 