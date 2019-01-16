import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitMockService } from './produit/produit.mock.service';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { from } from 'rxjs';
import { ProduitService } from './produit/produit.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { XhrInterceptor } from './xhr.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ContentComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProduitMockService,
    ProduitService,
    AppService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
