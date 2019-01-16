import { Component, OnInit } from '@angular/core';
import { PrincipalState } from '../shared/principal.state';
import { Store } from '@ngrx/store';
import { Principal } from '../shared/principal.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private principal: Principal;
  constructor(private store: Store<PrincipalState>) { }

  ngOnInit() {

    this.store.select('principal').subscribe(principal => {
      this.principal = principal;
   });

  }

  hasRoleUser(): boolean {

    let hasRoleUser: boolean = false;
    this.principal.authorities.forEach(item => {
      if (item.authority === 'ROLE_USER' ) {
          hasRoleUser = true;

      }
     
    });
    return hasRoleUser;
  }


  hasRoleAdmin(): boolean {
    let hasRoleAdmin: boolean = false;
    this.principal.authorities.forEach(item => {
      console.log('hasRole ====>', item);
      if (item.authority === 'ROLE_ADMIN' ) {
        hasRoleAdmin = true;
      }
      console.log('hasRoleAdmin ====>', hasRoleAdmin);
    });
    return hasRoleAdmin;
  }

}
