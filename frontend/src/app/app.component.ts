import { Component } from '@angular/core';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router, private service: AdminService) {}
  navigateToLanding() {
    this.router.navigate(['/landing']);
  }
  title = 'AdminDashBoard';
  // logindata = { mail: '', password: '' };
  // errmsg: string = '';
  // islogin: boolean = true;
  // isdashboard: boolean = false;

  //

  // onsubmit() {
  //   this.service.login(this.logindata).subscribe(
  //     (res) => {
  //       console.log('login succefully');
  //       this.islogin = false;
  //       this.isdashboard = true;
  //       this.router.navigate(['/dashboard']);
  //     },
  //     (err) => {
  //       console.log(err);
  //       this.errmsg = 'invalid username and password';
  //     }
  //   );
  // }
  // logout() {
  //   this.islogin = true;
  //   this.isdashboard = false;
  //   this.logindata = { mail: '', password: '' };
  //   this.errmsg = '';
  // }
}
