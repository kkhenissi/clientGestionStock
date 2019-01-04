import { Component, OnInit } from '@angular/core';
import { ProduitService } from './produit.service';
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
    operation: string = 'add';
    selectedProduit: Produit;

    constructor(private _produitService: ProduitService,
                private fb: FormBuilder) {
        this.produitForm = this.fb.group({

                            ref: ['', Validators.required],
                            quantite: [''],
                            prixUnitaire: ['']

                                    });
}
ngOnInit(): void {
    // this.produits =  this._produitService.getProduits();
    //     console.log('===========>', this.produits);
    this.loadProduits();
}

loadProduits() {
    this._produitService.getProduits().subscribe(
        data => { this.produits = data },
        error => { console.log ('An error was occured')},
        () => { console.log('loading produit was done !!')}

    );
}

addProduit() {
    const p = this.produitForm.value;
    this._produitService.addProduit(p).subscribe(
        res => {
            this.loadProduits();
        });
}
 updateProduit() {
     this._produitService.updateProduit({})
          .subscribe(
              res => {
                  this.loadProduits();
              });
 }

 initProduit() {
     this.selectedProduit = new Produit();
 }

}
