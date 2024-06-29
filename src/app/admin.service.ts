import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiurl = 'http://localhost:2026/admin';

  constructor(private http: HttpClient) {}

  getAlldata(data: any): Observable<any> {
    return this.http.get(`${this.apiurl}/data`);
  }
  createdata(add: any): Observable<any> {
    return this.http.post(`${this.apiurl}/save`, add);
  }
  updatedata(edit: any): Observable<any> {
    return this.http.put(`${this.apiurl}/update/{id}`, edit);
  }
  deletedata(id: any): Observable<any> {
    return this.http.delete(`${this.apiurl}/delete/{id}`, id);
  }
  searchAdmins(searchTerm: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiurl}?search=${searchTerm}`);
  }
}
