import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'restaurants',children:[
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      {
          path: 'add', component:AddRestaurantComponent 
      },
      {
          path: 'list', component:ListRestaurantsComponent
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
