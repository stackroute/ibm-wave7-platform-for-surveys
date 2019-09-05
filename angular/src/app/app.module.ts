import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import { MatInputModule,MatListModule, MatSidenav, MatSidenavContainer, MatSidenavModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SurveyinfoComponent } from './surveyinfo/surveyinfo.component';
import { MySurveyCardComponent,CreateSurveyDialogue } from './my-survey-card/my-survey-card.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MyprofileComponent } from './myprofile/myprofile.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DialogComponent} from './myprofile/myprofile.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { QuestionsTemplateComponent, EditQuestionDialog } from './questions-template/questions-template.component';
import { MypasswordComponent } from './mypassword/mypassword.component';
import {MatTabsModule} from '@angular/material/tabs';
import {ConstantsService} from './constants.service';
import { PublishedviewComponent } from './publishedview/publishedview.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { ThankingDialogBoxComponent } from './thanking-dialog-box/thanking-dialog-box.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { QuestionsComponent } from './questions/questions.component';


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
    SupportPageComponent,
    QuestionsComponent,
    EditQuestionDialog
  ],
  imports: [
    MatRadioModule,
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
    MatDialogModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSidenavModule

  ],
  providers: [MyprofileComponent,DialogComponent],

  entryComponents : [MySurveyCardComponent, CreateSurveyDialogue,DialogComponent, DialogContentComponent, QuestionsTemplateComponent, EditQuestionDialog],





  bootstrap: [AppComponent]
})
export class AppModule { }

