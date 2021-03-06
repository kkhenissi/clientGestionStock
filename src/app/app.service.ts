import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URLS} from './config/api-url-config';
import 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { callbackify } from 'util';
import { Store } from '@ngrx/store';
import { PrincipalState } from './shared/principal.state';
import { SAVE_PRINCIPAL } from './shared/save.principal.action';
@Injectable()
export class AppService {
  authenticated: boolean = false;

  // credentials = {
  //   username: 'user',
  //   password: 'password1'
  // };

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private store: Store<PrincipalState>) { }

  authenticate(credentials, callBack) {

    if ( credentials) {
   //   console.log('user name ==============>', credentials.username);
   //   console.log('password ==============>', credentials.password);
     const token = btoa(credentials.username + ':' + credentials.password);
      this.cookieService.set('token', token);
  //    console.log('token ==============>', token);
  //    console.log('API_URLS.USER_URL ==============>', API_URLS.USER_URL);
        this.http.get(API_URLS.USER_URL).subscribe( resp => {
         
          if (resp && resp['name']) {
            this.authenticated = true;
   //         console.log('resp ==============>', resp);
            this.store.dispatch({
              type: 'SAVE_PRINCIPAL',
              payload: resp
            });


          } else {
            this.authenticated = false;
          }
          return callBack && callBack();
        });

    } else {
      this.authenticated = false;
    }
  //  return callBack && callBack();
  }

  logout(callBack) {
       return callBack && callBack();

  }
}
