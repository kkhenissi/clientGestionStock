import { Produit } from '../shared/produit.model';
import { Injectable } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Observable, of } from 'rxjs';
@Injectable()
export class ProduitMockService implements CrudService {

    private Produits: Produit[] = [];
    constructor() {
        const p1: Produit = new Produit(1, 'Livre', 50, 20);
        const p2: Produit = new Produit(2, 'Cahier', 60, 10);
        const p3: Produit = new Produit(3, 'Stylo', 20, 240);
        const p4: Produit = new Produit(4, 'Ram de papier', 14, 230);

        this.Produits.push(p1);
        this.Produits.push(p2);
        this.Produits.push(p3);
        this.Produits.push(p4);
    }

    getAll(): Observable<any> {
        return of(this.Produits);
    }
    add(produit: Produit): Observable<any> {
        return of('success');

    }
    update(produit: Produit): Observable<any> {
        return of('success');
    }
    delete(id: any): Observable<any> {
        return of('success');
    }


    


  public getProduits(): Produit[] {
      return this.Produits;

  }
}
