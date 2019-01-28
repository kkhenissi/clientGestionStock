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
            nameItem: ['', Validators.required],
            descriptionItem: ['', Validators.required],
            quantiteItem: '',
            startPrice: ''
                    });

                    this.produitsModel = [
                        // new DataModel( 'idr', 'ID', 'number', true, []),
                        new DataModel( 'nameItem', 'Référence', 'string', false, []),
                        new DataModel( 'descriptionItem', 'Description', 'string', false, []),
                        new DataModel( 'quantiteItem', 'Quantité', 'number', false, []),
                        new DataModel( 'startPrice', 'start Price', 'number', false, []),

                    ];
    }

}
