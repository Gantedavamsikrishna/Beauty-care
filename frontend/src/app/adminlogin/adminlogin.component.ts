import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent {
  logindata = { mail: '', password: '' };
  errmsg: string = '';

  constructor(private router: Router, private service: AdminService) {}

  onsubmit() {
    this.service.login(this.logindata).subscribe(
      (res) => {
        console.log('login succefully');

        this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.log(err);
        this.errmsg = 'invalid username an password';
      }
    );
  }
}
