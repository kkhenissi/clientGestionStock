import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() showSideBar: boolean;
  showSideBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _appservice: AppService, private _router: Router) { }

  ngOnInit() {
  }
  afficherSideBar() {
    this.showSideBar = !this.showSideBar;
    this.showSideBarChange.emit(this.showSideBar);

  }

  logout() {
    this._appservice.logout(() => {
      this._router.navigateByUrl('/login');

    });
  }

}
