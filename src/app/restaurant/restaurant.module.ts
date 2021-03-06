import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { OneRestaurantComponent } from './one-restaurant/one-restaurant.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddRestaurantComponent, ListRestaurantsComponent, OneRestaurantComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule 
  ],
  exports: [AddRestaurantComponent, ListRestaurantsComponent]
})
export class RestaurantModule { }
