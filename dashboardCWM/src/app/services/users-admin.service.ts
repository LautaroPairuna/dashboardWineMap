import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../interfaces/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }

  login(usuario: string, contrasena: string): Observable<Admin> {
    return this.http.post<Admin>(this.url + 'login', { usuario, contrasena });
  }


}
