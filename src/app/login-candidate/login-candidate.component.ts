import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login-candidate',
  templateUrl: './login-candidate.component.html',
  styleUrls: ['./login-candidate.component.sass']
})
export class LoginCandidateComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
  @Input() error: string | null;

  constructor(private http: HttpClient, private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {

    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");

    const sign_in = document.querySelector("#sign-in");
    const sign_up = document.querySelector("#sign-up");

    const container = document.querySelector(".login-container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });


    sign_in.addEventListener("click", () => {
      console.log("helloooooooooooooooo " + this.username + " " + this.password);
      this.loginservice.authenticate(this.username, this.password).subscribe(
        data => {
          this.router.navigate(['user'])
          this.invalidLogin = false
          console.log("mé 3andek 7atta ghalta!!!!");
        },
        error => {
          this.invalidLogin = true
          this.error = error.message;
          console.log("3andek ghalta!!!!");
        });
    });

    sign_up.addEventListener("click", () => {

      console.log("First Name" + (<HTMLInputElement>document.getElementById("firstName")).value);
      this.http.post("http://localhost:8080/register",
        {
          "firstname": (<HTMLInputElement>document.getElementById("firstName")).value,
          "lastname": (<HTMLInputElement>document.getElementById("lastName")).value,
          "email": (<HTMLInputElement>document.getElementById("mail")).value,
          "phone": (<HTMLInputElement>document.getElementById("phone")).value,
          "password": (<HTMLInputElement>document.getElementById("password")).value
        })
        .subscribe();

      container.classList.remove("sign-up-mode");
    });
  }

}
