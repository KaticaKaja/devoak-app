import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() button:string = "";
  @Input() list:any = [];
  @Input() flag:string;

  @Output() sendSort = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  getSortValueAndSend(e){
    let p = e.target || e.srcElement || e.toElement
    this.sendSort.emit(p.id);
  }
}
