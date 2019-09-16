import { Component } from '@angular/core';
import { User } from './modals/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public user:User;
  title = 'Pollurvey';
}
