import { Component } from '@angular/core';
import productList from './productList.json';
interface itemList {
  id: Number;
  p_name: String;
  p_cost: Number;
  p_availability: Number;
  p_details: String;
  p_category: String;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'add-to-cart';
  products : itemList[]=productList;
  constructor() {
    console.log(this.products);
  }
}
