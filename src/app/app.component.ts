import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  buttonclick: any = '';
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
    unit: '',
    city: '',
    state: ''
  };



  show() {
    this.buttonclick = this.user.firstName;
  }
}
