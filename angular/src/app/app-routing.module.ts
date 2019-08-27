import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { MySurveyCardComponent } from './my-survey-card/my-survey-card.component';
import { SurveyinfoComponent } from './surveyinfo/surveyinfo.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuestionsTemplateComponent } from './questions-template/questions-template.component';


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
    path : 'questions-template',
    component : QuestionsTemplateComponent
  },
  {
    path:'signup',component:SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
