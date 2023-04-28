import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'mycomponent',
    pathMatch: 'full'
  },
  {
    path: 'mycomponent',
    loadChildren: () => import('./mycomponent/mycomponent.module').then( m => m.MycomponentPageModule)
  },
  {
    path: 'mycomponent2',
    loadChildren: () => import('./mycomponent2/mycomponent2.module').then( m => m.Mycomponent2PageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  // {
  //   path: 'otp1',
  //   loadChildren: () => import('./otp1/otp1.module').then( m => m.Otp1PageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
