import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isregister: boolean = false;
  islogin: boolean = true;
  signin() {
    this.islogin = false;
    this.isregister = true;
  }
  login() {
    this.islogin = true;
    this.isregister = false;
  }
}
