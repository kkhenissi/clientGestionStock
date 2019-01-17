import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../shared/produit.model';
export interface CrudService {

    getAll(): Observable<any>;

    add(produit: Produit): Observable<any>;

    update(produit: Produit ): Observable<any>;

    delete(id): Observable<any>;
}
