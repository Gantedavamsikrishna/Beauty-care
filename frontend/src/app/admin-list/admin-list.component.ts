import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
})
export class AdminListComponent implements OnInit {
  readdata: any[] = [];
  productForm: FormGroup;
  searchTerm: any;
  isList: boolean = true;
  isreg: boolean = false;
  constructor(
    private fb: FormBuilder,
    private service: AdminService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

      phnumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  navigateToAdminReg() {
    this.isList = false;
    this.isreg = true;
    this.router.navigate(['dashboard/adminl/adminreg']);
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

      phnumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
    this.getAlldata(this.readdata);
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      this.service.createdata(formData).subscribe(
        (response) => {
          console.log('Admin created successfully', response);
          this.productForm.reset();
          this.isList = true;
          this.isreg = false;
          this.getAlldata(this.readdata);
        },
        (error) => {
          console.error('Error creating admin', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  getAlldata(data: any[]) {
    this.service.getAlldata(data).subscribe((res) => {
      console.log(res, 'data');
      this.readdata = res;
    });
  }

  search() {
    if (this.searchTerm) {
      this.service.searchAdmins(this.searchTerm).subscribe(
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
  delete(id: number) {
    if (confirm('Are you sure you want to delete this admin?')) {
      this.service.deleteadmin(id).subscribe(
        () => {
          this.readdata = this.readdata.filter((admin) => admin.id !== id);
          console.log(`Admin with ID ${id} deleted successfully.`);
        },
        (error) => {
          console.error('Error deleting admin:', error);
        }
      );
    }
  }

  edit(id: number) {
    this.router.navigate([`dashboard/update/${id}`]);
  }
}
