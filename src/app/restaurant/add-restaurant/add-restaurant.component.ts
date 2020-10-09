import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  messageAfterSubmit: string;

  constructor() { }

  ngOnInit(): void {
  }

  successMessageAndLocalStorage(addrestaurantForm:NgForm){
    this.messageAfterSubmit="You successfully created a restaurant!";
    let newRestaurant = {
      name: addrestaurantForm.value.name,
      desc: addrestaurantForm.value.desc,
      address: addrestaurantForm.value.addr,
      img: "assets/restaurant.jpg"       
    }
    let restaurants = [];
    if(localStorage.getItem('Restaurants')){
      restaurants = JSON.parse(localStorage.getItem('Restaurants'));
      restaurants = [newRestaurant, ...restaurants];
    }else{
      restaurants = [newRestaurant];
    }
    localStorage.setItem('Restaurants', JSON.stringify(restaurants));
    addrestaurantForm.reset();
  }

  closeAlert(){
    this.messageAfterSubmit="";
  }
}
