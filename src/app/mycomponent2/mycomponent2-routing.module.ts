import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mycomponent2Page } from './mycomponent2.page';

const routes: Routes = [
  {
    path: '',
    component: Mycomponent2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mycomponent2PageRoutingModule {}
