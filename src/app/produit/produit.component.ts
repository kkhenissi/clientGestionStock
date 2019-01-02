import { Component, OnInit } from '@angular/core';
import { ProduitMockService } from './produit.mock.service';
import { Produit } from '../shared/produit';


@Component({
    selector: 'app-produit',
    templateUrl: './produit.component.html',
    styleUrls: ['./produit.component.css']
})
export class ProduitComponent  implements OnInit {
    private produits: Produit[] = [];

    constructor(private _produitMockService: ProduitMockService) {
}
ngOnInit(): void {
    this.produits =  this._produitMockService.getProduits();
        console.log('===========>', this.produits);
}
}
