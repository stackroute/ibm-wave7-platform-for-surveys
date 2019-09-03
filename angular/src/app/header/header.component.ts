import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../constants.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public variable:Boolean=true;
  public url:string='http://localhost:4200/login';
  constructor(public constant:ConstantsService,private router:Router) { }

  ngOnInit() {    
    console.log(this.constant.globalvariable);
    this.variable = this.constant.globalvariable;

    console.log(this.variable);
  }
  login()
  {
    this.router.navigateByUrl('login');
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  about()
  {
    this.router.navigateByUrl('about');
  }

  support()
  {
    this.router.navigateByUrl('support');
  }
}
