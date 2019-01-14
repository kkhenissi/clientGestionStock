import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // showHideSideBar: Boolean = false;

  constructor(private _appService: AppService,
              private _router: Router) {

  }

  ngOnInit(): void {
   if (!this._appService.authenticated) {
     this._router.navigateByUrl('/login');

   } else {
     this._router.navigateByUrl('/home');
   }
  }


}
