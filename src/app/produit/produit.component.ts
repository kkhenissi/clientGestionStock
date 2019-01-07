import { Component, OnInit } from '@angular/core';
import { ProduitService } from './produit.service';
import { Produit } from '../shared/produit';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


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
                private fb: FormBuilder,
                private route: ActivatedRoute) {
                    this.createForm();
}
ngOnInit(): void {
    // this.produits =  this._produitService.getProduits();
    //     console.log('===========>', this.produits);
    this.initProduit();
    this.produits = this.route.snapshot.data.produits;
  //  this.loadProduits();
}

createForm() {
    this.produitForm = this.fb.group({

        ref: ['', Validators.required],
        quantite: [''],
        prixUnitaire: ['']

                });

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
            this.initProduit();
            this.loadProduits();
        });
}
 updateProduit() {
     this._produitService.updateProduit(this.selectedProduit)
          .subscribe(
              res => {
                  this.loadProduits();
              });
 }

 initProduit() {
    this.selectedProduit = new Produit();
    this.createForm();
 }

 deleteProduit () {
     this._produitService.deleteProduit(this.selectedProduit.id)
          .subscribe(
              res => {
                  this.selectedProduit = new Produit();
                  this.loadProduits();
              }

          );
 }

}
