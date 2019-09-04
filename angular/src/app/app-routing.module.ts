import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { MySurveyCardComponent } from './my-survey-card/my-survey-card.component';
import { SurveyinfoComponent } from './surveyinfo/surveyinfo.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuestionsTemplateComponent } from './questions-template/questions-template.component';
import { HeaderComponent } from './header/header.component';

import { PublishedviewComponent } from './publishedview/publishedview.component';

import { ThankingDialogBoxComponent } from './thanking-dialog-box/thanking-dialog-box.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { QuestionsComponent } from './questions/questions.component';


const routes: Routes = [
  {
    path:'sign-up',component:SignUpComponent
  },
  {
    path:'survey',component:MySurveyCardComponent
  },
  {
    path:'publishview/surveyinfo',component:SurveyinfoComponent
  },

  // {
  //   path:'landing-page', component: LandingPageComponent
  // },
  {
    path:'',component:LandingPageComponent
  },
  {
    path:'login',
    component:LoginComponent,
  },
  // {
  //   path:'',
  //   redirectTo:'/',
  //   pathMatch:'full'
  // },
  {
    path : 'question-template',
    component : QuestionsTemplateComponent
  },
  {
    path:'signup',component:SignUpComponent
  },
  {

    path : 'publishview',
    component : PublishedviewComponent
  },
  {

    path:'landing',component:UserLandingPageComponent
  },
  {
    path:'thankyou',component:ThankingDialogBoxComponent
  },
  {
    path:'myprofile',
    component:MyprofileComponent
  },
  {
    path:'about', component: AboutUsComponent
  },
  {
    path:'support', component: SupportPageComponent
  },
  {
    path:'questions', component: QuestionsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
