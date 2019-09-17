import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule, MatListModule, MatSidenav, MatSidenavContainer, MatSidenavModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SurveyinfoComponent } from './surveyinfo/surveyinfo.component';
import { MySurveyCardComponent, CreateSurveyDialogue } from './my-survey-card/my-survey-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogComponent } from './myprofile/myprofile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionsTemplateComponent, EditQuestionDialog } from './questions-template/questions-template.component';
import { MypasswordComponent } from './mypassword/mypassword.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ConstantsService } from './constants.service';
import { PublishedviewComponent } from './publishedview/publishedview.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { ThankingDialogBoxComponent } from './thanking-dialog-box/thanking-dialog-box.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { QuestionsComponent } from './questions/questions.component';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

import { CommonModule } from '@angular/common';


import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from "fusioncharts";
import * as Charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import { ResponseAnalysisComponent } from './response-analysis/response-analysis.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { RewardPointsComponent } from './reward-points/reward-points.component';
import { ChatService } from './chat.service';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


import { UserWelcomeComponent } from './user-welcome/user-welcome.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SpeechRecognitionService } from './speech-recognition.service';
import { UserprofileComponent, DialogComponents } from './userprofile/userprofile.component';


// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    LandingPageComponent,
    MySurveyCardComponent,
    CreateSurveyDialogue,
    SurveyinfoComponent,
    CreateSurveyDialogue,
    MyprofileComponent,
    DialogComponent,
    QuestionsTemplateComponent,
    DialogContentComponent,
    ThankingDialogBoxComponent,
    MypasswordComponent,
    PublishedviewComponent,
    AboutUsComponent,
    UserLandingPageComponent,
    SupportPageComponent, ResponseAnalysisComponent,
    QuestionsComponent,
    EditQuestionDialog,
    ChatbotComponent,
    DialogComponents,


    RewardPointsComponent,
    ResetpasswordComponent,

    
    UserWelcomeComponent,

    
    ServicespageComponent,

    
    ContactUsComponent,

    
    UserprofileComponent,

    

  ],
  imports: [
    MatRadioModule,
    FontAwesomeModule,
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    FlexLayoutModule,
    MatListModule,
    
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDividerModule,
    RouterModule,
    NgbModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSidenavModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    CommonModule,
    FusionChartsModule
  ],
  exports: [ChatbotComponent],
  providers: [MyprofileComponent, DialogComponent, ChatService,SpeechRecognitionService],


  entryComponents: [MySurveyCardComponent, CreateSurveyDialogue, DialogComponent, DialogContentComponent, QuestionsTemplateComponent, EditQuestionDialog,DialogComponents,ChatbotComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

