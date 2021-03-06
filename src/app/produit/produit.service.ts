import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api-url-config';
import { Produit } from '../shared/produit.model';
import { LoginComponent } from '../login/login.component';
import { AppService } from '../app.service';
import { CrudService } from '../shared/crud.service';


@Injectable()
export class ProduitService  implements CrudService {
    getAll(): Observable<any> {
        return this._http.get(API_URLS.PRODUITS_URL);
    }
    add(produit: Produit): Observable<any> {
        return this._http.post(API_URLS.PRODUITS_URL, produit);

    }
    update(produit: Produit): Observable<any> {
        return this._http.put(API_URLS.PRODUITS_URL, produit);
    }

    delete(id: any): Observable<any> {
        return this._http.delete(API_URLS.PRODUITS_URL + `/${id}`);
    }
    constructor(private _http: HttpClient, private _appService: AppService) {

    }

}
