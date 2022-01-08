import { Component, OnInit } from '@angular/core';
// import { ApiService } from 'src/app/service/api.service';
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
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {

  products : itemList[]=productList;
  constructor() {
    console.log(this.products);
  }
  // public productList: any;
  // constructor(private api: ApiService) {}
  // ngOnInit(): void {
  //   this.api.getProduct().subscribe((res) => {
  //     this.productList = res;
  //   });
  // }
}
