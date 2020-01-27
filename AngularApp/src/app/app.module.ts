import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AlertModule } from './shared/_alert';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './shared/cart.service';



const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ShippingComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductAlertsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AlertModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
