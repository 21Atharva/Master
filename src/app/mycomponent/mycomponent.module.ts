import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycomponentPageRoutingModule } from './mycomponent-routing.module';

import { MycomponentPage } from './mycomponent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycomponentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MycomponentPage]
})
export class MycomponentPageModule {}
