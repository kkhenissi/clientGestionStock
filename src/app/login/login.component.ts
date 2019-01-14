import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService  } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  credentials = {
    username: '',
    password: ''
  };

  constructor(private fb: FormBuilder,
              private _appservice: AppService,
              private _router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
       username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
       password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  login() {

   this._appservice.authenticate(this.credentials, () => {
     this._router.navigateByUrl('/home/(contentOutlet:produit)');
    });
    {
   }
  }

}
