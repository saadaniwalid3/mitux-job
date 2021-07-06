import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.component.html',
  styleUrls: ['./login-company.component.sass']
})
export class LoginCompanyComponent implements OnInit {

  constructor() { }

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
  }

}
