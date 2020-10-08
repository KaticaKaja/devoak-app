import { RestaurantModule } from './../restaurant/restaurant.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [HomeComponent, AdminComponent, DefaultLayoutComponent, PageNotFoundComponent],
  imports: [
    PagesRoutingModule,
    SharedModule,
    RouterModule,
    RestaurantModule
  ],
  exports: [SharedModule]
})
export class PagesModule { }
