import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ConstantsService } from '../constants.service';
import { Observable } from 'rxjs';
import { UserRegistrationService } from '../user-registration.service';
import { SurveyService } from '../survey.service';
import { Survey } from '../modals/Survey';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  public surveyList : Survey[];
  public surveySlides: any = [[]];
  slides: any = [[]];
  isLoggedIn$:Observable<boolean>;
  loggedIn: boolean;
  isLoggedOut$:Observable<boolean>;
  loggedOut: boolean;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    cards = [
    {
      title: 'Get Faster Decisions',
      description: 'You are one step closer to making decisions based on the feedback from the users once you create an account.',
      //buttonText: 'Try Pollurvey',
      img: 'assets/pictures/de.jpg'
    },
    {
      title: 'We Secure Data',
      description: 'We promise you that your data is secured.Only you have the right to access it anytime anywhere.',
      //buttonText: 'About Us',
      img: 'assets/pictures/security.jpeg'
    },
    {
      title: 'We connect World',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      //buttonText: 'Take Surveys',
      img: 'assets/pictures/world.jpg'
    },
    {
      title: 'Fit your Business',
      description: 'Organize our survey platform to best fit your business requirements',
      //buttonText: 'Try Pollurvey',
      img: 'assets/pictures/business.jpeg'
    },
    {
      title: 'Ask appropriate Questions',
      description: 'Ask questions that will lead to correct and appropriate data responses',
      //buttonText: 'About Us',
      img: 'assets/pictures/ques.jpg'
    },
    {
      title: 'User Friendly Surveys',
      description: 'Your survey will look nice on all the screens be it mobile or Desktop.',
      //buttonText: 'Create Surveys',
      img: 'assets/pictures/survey.jpeg'
    },
    // {
    //   title: 'Card Title 7',
    //   description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    //   buttonText: 'Button',
    //   img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    // },
    // {
    //   title: 'Card Title 8',
    //   description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    //   buttonText: 'Button',
    //   img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    // },
    // {
    //   title: 'Card Title 9',
    //   description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    //   buttonText: 'Button',
    //   img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    // },
  ];

  constructor(private userRegistrationService:UserRegistrationService, private router : Router,private surveyService : SurveyService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userRegistrationService.logged;
    this.userRegistrationService.setLogin(true);
    this.isLoggedIn$.subscribe(data => {
      this.loggedIn = data;
      // console.log(this.loggedIn);
    });
    this.isLoggedOut$ = this.userRegistrationService.logOut;
    this.userRegistrationService.setLogout(false);
    this.isLoggedOut$.subscribe(data => {
      this.loggedOut = data;
      // console.log(this.loggedOut);
    });
    this.slides = this.chunk(this.cards, 4);
    this.getSurveyList();

  }

  getSurveyList()
  {
    this.surveyService.getAllSurveys().subscribe(
      (data) => {
        this.surveyList = data
        this.surveySlides = this.surveyChunk(this.surveyList, 4);
      })
  }

  login()
  {
    this.router.navigateByUrl('login');
  }

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  surveyChunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
 
}

