import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitResolver } from './produit/produit.resolver';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'produit',
        component: ProduitComponent,
        resolve:
         {
          produits: ProduitResolver
         },
         outlet: 'contentOutlet'
       },
      {
        path: 'dashboard',
        component: DashboardComponent,
        outlet: 'contentOutlet'
        },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule],
  providers: [ProduitResolver]
})
export class AppRoutingModule { }
