import { Produit } from '../shared/produit';
import { Injectable } from '@angular/core';
@Injectable()
export class ProduitMockService {
 private Produits: Produit[] = [];
  constructor() {
      const p1: Produit = new Produit('Livre', 50, 20);
      const p2: Produit = new Produit('Cahier', 60, 10);
      const p3: Produit = new Produit('Stylo', 20, 240);
      const p4: Produit = new Produit('Ram de papier', 14, 230);

      this.Produits.push(p1);
      this.Produits.push(p2);
      this.Produits.push(p3);
      this.Produits.push(p4);
  }

  public getProduits(): Produit[] {
      return this.Produits;

  }
}
