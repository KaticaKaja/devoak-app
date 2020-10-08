import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() button:string = "";
  @Input() list:any = [];
  @Input() flag:string;
  constructor() { }

  ngOnInit(): void {
  }

}