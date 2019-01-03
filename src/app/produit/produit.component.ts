import { Component, OnInit } from '@angular/core';
import { ProduitMockService } from './produit.mock.service';
import { Produit } from '../shared/produit';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-produit',
    templateUrl: './produit.component.html',
    styleUrls: ['./produit.component.css']
})
export class ProduitComponent  implements OnInit {
    private produits: Produit[] = [];
    produitForm: FormGroup;

    constructor(private _produitMockService: ProduitMockService,
                private fb: FormBuilder) {
        this.produitForm = this.fb.group({

                            ref: ['', Validators.required],
                            quantite: [''],
                            prixUnitaire: ['']

                                    });
}
ngOnInit(): void {
    this.produits =  this._produitMockService.getProduits();
        console.log('===========>', this.produits);
}
}
