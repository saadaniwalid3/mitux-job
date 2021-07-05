import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  currentUser: string;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(`http://localhost:8080/Candidate/1`, { username, password })
      .pipe(map(user => {
        // login successful if there's a user in the response
        if (user) {
          // store user details and basic auth credentials in local storage 
          // to keep user logged in between page refreshes
          user.authdata = window.btoa(username + ':' + password);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUser = JSON.parse(JSON.stringify(user)).firstName;
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUser = "";
  }

  /*getCurrentUser() {
    return this.currentUser;
  }*/
}
