import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycomponentPage } from './mycomponent.page';

const routes: Routes = [
  {
    path: '',
    component: MycomponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycomponentPageRoutingModule {}
