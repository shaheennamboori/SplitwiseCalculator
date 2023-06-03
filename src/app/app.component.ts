import { Component, OnInit } from '@angular/core';
import { FoodItem } from './Models/FoodItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public itemsList: FoodItem[] = [];

  ngOnInit(): void {
  }

  public AddItem() {
    this.itemsList.push({Name: 'Item',
    price: 0,
  Quantity: 1} as FoodItem)
  }
}
