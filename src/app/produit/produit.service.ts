import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api-url-config';
import { Produit } from '../shared/produit';
import { LoginComponent } from '../login/login.component';
import { AppService } from '../app.service';


@Injectable()
export class ProduitService {
    constructor(private _http: HttpClient, private _appService: AppService) {

    }

    getProduits(): Observable<any> {

        // this._appService.credentials = {
        //     username: 'user',
        //     password:  'password1'
        //   };

        // const token = btoa(this._appService.credentials.username + ':' + this._appService.credentials.password);
        // const headers = new HttpHeaders(this._appService.credentials ? {
        //   authorization: 'Basic' + token
        // } : {});

        return this._http.get(API_URLS.PRODUITS_URL);

    }


    addProduit(produit: Produit): Observable<any> {
        return this._http.post(API_URLS.PRODUITS_URL, produit);

    }

    updateProduit(produit: Produit ): Observable<any> {
        return this._http.put(API_URLS.PRODUITS_URL, produit);

    }

    deleteProduit(id: number): Observable<any> {
        return this._http.delete(API_URLS.PRODUITS_URL + `/${id}`);

    }

}
