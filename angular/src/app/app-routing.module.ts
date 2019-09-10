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
import {ResponseAnalysisComponent} from './response-analysis/response-analysis.component';

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
    path:'',component:LandingPageComponent
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path : 'question-template/:surveyId',
    component : QuestionsTemplateComponent
  },
  {
    path:'signup',component:SignUpComponent
  },
  {
    path : 'publishview/:surveyId',
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
    path:'questions/:surveyId', component: QuestionsComponent
  },
  {
    path:'analysis',component:ResponseAnalysisComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
