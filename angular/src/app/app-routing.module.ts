import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'sign-up',component:SignUpComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    redirectTo:'/sign-up',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
