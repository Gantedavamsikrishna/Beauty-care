import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private adminurl = 'https://adminlogin-latest.onrender.com/admin';
  private producturl = 'https://products-api-44eo.onrender.com/product';
  private orderurl = 'https://reqres.in/api';
  constructor(private http: HttpClient) {}

  getAlldata(data: any): Observable<any> {
    return this.http.get(`${this.adminurl}/data`);
  }
  getallprdata(data: any): Observable<any> {
    return this.http.get(`${this.producturl}/data`);
  }
  getallordedata(users: any): Observable<any> {
    return this.http.get(`${this.orderurl}/users`);
  }
  getallorders(data: any): Observable<any> {
    return this.http.get(`${this.producturl}/data`);
  }
  getproductbyid(id: any): Observable<any> {
    return this.http.get(`${this.producturl}/get/${id}`);
  }
  createdata(add: any): Observable<any> {
    return this.http.post(`${this.adminurl}/save`, add);
  }
  createprdata(add: FormData): Observable<any> {
    return this.http.post(`${this.producturl}/save`, add);
  }
  getImageUrl(id: any) {
    return `${this.producturl}/image/${id}`;
  }
  createorder(add: any): Observable<any> {
    return this.http.post(`${this.producturl}/save`, add);
  }
  updatedata(id: any): Observable<any> {
    return this.http.put(`${this.adminurl}/update/${id}`, id);
  }
  deleteadmin(id: any): Observable<any> {
    return this.http.delete(`${this.adminurl}/delete/${id}`, {
      responseType: 'text',
    });
  }
  deletepr(id: any): Observable<any> {
    return this.http.delete(`${this.producturl}/delete/${id}`, {
      responseType: 'text',
    });
  }
  searchAdmins(searchTerm: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.adminurl}?search=${searchTerm}`);
  }
  login(admin: any): Observable<any> {
    return this.http.post(`${this.adminurl}/login`, admin, {
      responseType: 'text',
    });
  }
}
