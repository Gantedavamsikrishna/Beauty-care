import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-reg',
  templateUrl: './admin-reg.component.html',
  styleUrls: ['./admin-reg.component.css'],
})
export class AdminRegComponent implements OnInit {
  productForm: FormGroup;

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

  ngOnInit() {
    this.productForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

      phnumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      this.service.createdata(formData).subscribe(
        (response) => {
          console.log('Admin created successfully', response);
          this.productForm.reset();
          this.router.navigate(['/adminl']);
        },
        (error) => {
          console.error('Error creating admin', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
