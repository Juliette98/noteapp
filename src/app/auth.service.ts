import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  connectedUser: any = null;

  constructor(private http: HttpClient) {
    this.isLogged();
  }

  login(login, password): Observable<any>{
    return this.http.post('http://localhost:3000/login', { login, password}, {withCredentials: true});
  }

  logout(): Observable<any>{
    return this.http.get('http://localhost:3000/logout', {withCredentials: true});
  }

  register(login: any, password: any, fullName: any): Observable<any>{
    return this.http.post('http://localhost:3000/register', {login, password, fullName}, {withCredentials: true});
  }

  isLogged(): void{
    this.http.get('http://localhost:3000/islogged', { withCredentials: true}).subscribe(
        (connectedUser) => {
          this.connectedUser = connectedUser;
          console.log(this.connectedUser);
          console.log('connected');
        },
        (error) => {
          console.log('not connected');
        }
    );
  }
}
