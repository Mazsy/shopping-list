import { Component, OnInit } from '@angular/core';
import  { Item } from '../../models/item'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }
  items: Item[]=[];

  ngOnInit(): void {
    this.items = [
      {
        id : 0,
        title : 'manzana',
        price : 30,
        quantity: 4,
        completed : false
      },
     {
        id : 0,
        title : 'pan',
        price : 90.0,
        quantity: 4,
        completed : true
      },
    ];
  }
}
