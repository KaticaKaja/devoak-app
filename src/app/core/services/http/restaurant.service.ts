import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/shared/models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }

  getRestaurants():Observable<Restaurant[]>{
    let url = "http://localhost:3000/restaurants";
    return this.http.get<Restaurant[]>(url);
  }

  addRestaurant(){

  }
}
