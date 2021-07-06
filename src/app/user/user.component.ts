import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_services/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  user: any;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {

    this.http.get("http://localhost:8080/Candidate/1")
      .subscribe(data => {
        this.user = data;
        console.log(data)
      });
  }

}
