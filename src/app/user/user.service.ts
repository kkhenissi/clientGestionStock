import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api-url-config';
import { User } from '../shared/user.model';
import { LoginComponent } from '../login/login.component';
import { AppService } from '../app.service';
import { CrudService } from '../shared/crud.service';


@Injectable()
export class UserService  implements CrudService {
    getAll(): Observable<any> {
        return this._http.get(API_URLS.USER_CRUD_URL);
    }
    add(user: User): Observable<any> {
        return this._http.post(API_URLS.USER_CRUD_URL, user);

    }
    update(user: User): Observable<any> {
        return this._http.put(API_URLS.USER_CRUD_URL, user);
    }
    delete(id: any): Observable<any> {
        return this._http.delete(API_URLS.USER_CRUD_URL + `/${id}`);
    }
    constructor(private _http: HttpClient, private _appService: AppService) {

    }

}
