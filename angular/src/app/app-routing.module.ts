import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  // {
  //   path:'landing-page', component: LandingPageComponent
  // },
  {
    path:'',component:LandingPageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  // {
  //   path:'',
  //   redirectTo:'/',
  //   pathMatch:'full'
  // },
  {
    path:'signup',component:SignUpComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
