import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-apistest',
  templateUrl: './apistest.component.html',
  styleUrls: ['./apistest.component.css'],
})
export class ApistestComponent implements OnInit {
  readdata: any;
  constructor(private service: AdminService) {}
  ngOnInit(): void {
    this.getallorders1(this.readdata);
  }

  getallorders1(users: any[]) {
    this.service.getallordedata(users).subscribe((res) => {
      console.log(res, 'users');
      this.readdata = res;
    });
  }
}
