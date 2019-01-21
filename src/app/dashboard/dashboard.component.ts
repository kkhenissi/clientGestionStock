import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit/produit.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


 produitsData = {
    labels: [],
    datasets: []
   };
 usersData  =  {
    labels: [],
    datasets: []
  };
   constructor(private produitService: ProduitService, 
               private userService: UserService) { }

   ngOnInit() {

      const datasetsQuantite = {
        label: 'Quantité',
        data: [],
        backgroundColor: '',
        borderColor: 'rgb(191, 255, 0)'
      };
      const datasetsPrixUnitaire = {
        label: 'Prix Unitaire',
        data: [],
        backgroundColor: '',
        borderColor: 'rgb(0, 255, 128, 0)'
      };
      const datasetUser = {
        label: 'Roles',
        data: [],
        backgroundColor: '',
        borderColor: 'rgb(0, 255, 128, 0)'
      };
     

      this.produitService.getAll().subscribe(list =>  list.forEach(produit => {
      //  console.log('=======*********************************=======>}', produit);
        this.produitsData.labels.push(produit.ref);
        datasetsQuantite.data.push(produit.quantite);
        datasetsPrixUnitaire.data.push(produit.prixUnitaire);
      }));

      this.produitsData.datasets.push(datasetsQuantite);
      this.produitsData.datasets.push(datasetsPrixUnitaire);
      this.usersData.datasets.push(datasetUser);

     this.userService.getAll().subscribe(list => list.forEach(user => {
          this.usersData.labels.push(user.username);
          datasetUser.data.push(user.roles.length);


     }));
     

    return this.produitsData;
   }


}
