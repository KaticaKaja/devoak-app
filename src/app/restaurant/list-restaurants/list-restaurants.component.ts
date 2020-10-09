import { RestaurantService } from './../../core/services/http/restaurant.service';
import { Restaurant } from './../../shared/models/Restaurant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})
export class ListRestaurantsComponent implements OnInit {
  showModal=false;
  restaurant:Restaurant;
  restaurants:Restaurant[];
  btnName:string = "Sorting";
  sorting:any = [{"name":"Ascending by name","sort":"asc"},{"name":"Descending by name","sort":"desc"}];
  searchedInput:string = '';
  searched:string = '';
  prop:string = 'name';

  sortDirection:string = '';
  sortProp:string = 'name';
  constructor(private restaurantService: RestaurantService) { }
  // restaurants = [{
  //   "id": 1,
  //   "name": "restoran1",
  //   "body": "sdfgdfgdfgdgdf"
  // },{
  //   "id": 2,
  //   "name": "restoran2",
  //   "body": "sdfgdfgdfgdgdf"
  // },{
  //   "id": 3,
  //   "name": "restoran3",
  //   "body": "sdfgdfgdfgdgdf"
  // }];
  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(data=> {this.restaurants = data;});
  }

  showAndSendRestaurant(restaurant){
    this.showModal = true;

    const obj = this.restaurants.find(r=> r.id == restaurant.id );
    this.restaurant = obj;
  }
  updateShowModal(event){
    this.showModal = event;

  }

  onClickFilter(){
    this.searched = this.searchedInput;
  }
  clearSearch(){
    this.searched = '';
    this.searchedInput = '';
  }

  receiveSortValue(e){
    this.sortDirection = e;
  }

}
