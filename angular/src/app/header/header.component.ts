import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public variable:Boolean=true;
  public url:string='http://localhost:4200/login';
  constructor(public constant:ConstantsService) { }

  ngOnInit() {    
    console.log(this.constant.globalvariable);
    this.variable = this.constant.globalvariable;

    console.log(this.variable);
  }

}
