import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
})
export class AdminListComponent implements OnInit {
  readdata: any[] = [];

  searchTerm: any;

  constructor(private server: AdminService) {}

  ngOnInit(): void {
    this.getAlldata(this.readdata);
  }

  getAlldata(data: any[]) {
    this.server.getAlldata(data).subscribe((res) => {
      console.log(res, 'data');
      this.readdata = res;
    });
  }

  search() {
    if (this.searchTerm) {
      this.server.searchAdmins(this.searchTerm).subscribe(
        (data) => {
          this.readdata = data;
        },
        (error) => {
          console.error('Error searching admins:', error);
        }
      );
    } else {
      this.getAlldata(this.readdata); // Load all data if search term is empty
    }
  }
}
