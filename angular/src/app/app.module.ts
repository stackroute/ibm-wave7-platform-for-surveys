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
import { MatInputModule,MatListModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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
<<<<<<< HEAD
import { MyprofileComponent } from './myprofile/myprofile.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DialogComponent} from './myprofile/myprofile.component';


=======
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { QuestionsTemplateComponent } from './questions-template/questions-template.component';
>>>>>>> 5b3482a9ee4297469b985be51b5dd9165a0bfe53

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
<<<<<<< HEAD
    CreateSurveyDialogue,
    MyprofileComponent,
    DialogComponent,
    
=======
    QuestionsTemplateComponent,
>>>>>>> 5b3482a9ee4297469b985be51b5dd9165a0bfe53
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
<<<<<<< HEAD
    MatDialogModule,
    MatTooltipModule
    
  ],
  providers: [MyprofileComponent,DialogComponent],
=======
    NgbModule
  ],
  entryComponents : [MySurveyCardComponent, CreateSurveyDialogue],
  providers: [],
>>>>>>> 5b3482a9ee4297469b985be51b5dd9165a0bfe53
  bootstrap: [AppComponent]
})
export class AppModule { }
