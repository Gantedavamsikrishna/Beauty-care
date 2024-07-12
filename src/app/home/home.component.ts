import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  islogin: boolean = false;
  isregi: boolean = true;
  signin() {
    this.islogin = true;
    this.isregi = false;
  }
}
