import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mycomponent2PageRoutingModule } from './mycomponent2-routing.module';

import { Mycomponent2Page } from './mycomponent2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mycomponent2PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Mycomponent2Page]
})
export class Mycomponent2PageModule {}
