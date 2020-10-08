import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/Restaurant';

@Component({
  selector: 'app-one-restaurant',
  templateUrl: './one-restaurant.component.html',
  styleUrls: ['./one-restaurant.component.css']
})
export class OneRestaurantComponent implements OnInit {

  @Output() onCloseModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }
  @Input() restaurant:Restaurant;
  ngOnInit(): void {
  }

  passDataToParent(){
    this.onCloseModal.emit(false);
  }
}
