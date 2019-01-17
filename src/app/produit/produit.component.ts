import { Component, OnInit } from '@angular/core';
import { ProduitService } from './produit.service';
import { Produit } from '../shared/produit.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataModel } from '../shared/data.model';


@Component({
    selector: 'app-produit',
    templateUrl: './produit.component.html',
    styleUrls: ['./produit.component.css']
})
export class ProduitComponent  implements OnInit {
    produits: Produit[] = [];
    produitForm: FormGroup;
    operation: String = 'add';
    selectedProduit: Produit;
    produit: Produit = new Produit();
    produitsModel: DataModel[];

    constructor(private produitService: ProduitService,
        private fb: FormBuilder,
        private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.produits = this.route.snapshot.data.produits;
        this.produitForm = this.fb.group({
            ref: ['', Validators.required],
            quantite: '',
            prixUnitaire: ''
                    });
                    this.produitsModel = [
                        new DataModel( 'id', 'ID', 'number', true, ''),
                        new DataModel( 'ref', 'Référence', 'string', false, ''),
                        new DataModel( 'quantite', 'Quantité', 'number', false, ''),
                        new DataModel( 'prixUnitaire', 'Prix Unitaire', 'number', false, ''),

                    ];
    }

}
