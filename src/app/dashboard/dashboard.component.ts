import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  errmsg: string = '';
  islogin: boolean = true;
  isdashboard: boolean = false;
  logindata = { mail: '', password: '' };

  constructor(private router: Router, private service: AdminService) {}

  onsubmit() {
    this.service.login(this.logindata).subscribe(
      (res) => {
        console.log('login succefully');
        this.islogin = false;
        this.isdashboard = true;
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.log(err);
        this.errmsg = 'invalid username and password';
      }
    );
  }
}
