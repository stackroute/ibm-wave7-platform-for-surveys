import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { MySurveyCardComponent } from './my-survey-card/my-survey-card.component';
import { SurveyinfoComponent } from './surveyinfo/surveyinfo.component';


const routes: Routes = [
  {
    path:'sign-up',component:SignUpComponent
  },
  {
    path:'survey',component:MySurveyCardComponent
  },
  {
    path:'surveyinfo',component:SurveyinfoComponent
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
