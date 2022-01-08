import { Component, OnInit } from '@angular/core';
// import { ApiService } from 'src/app/service/api.service';
import productList from './productList.json';
import { CartService } from 'src/app/service/cart.service';

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
  public productList:any;
  products : itemList[]=productList;
  constructor(private cartService : CartService) {}

  //  ngOnInit(): void{
  //    this.productList.forEach((a:any)=>{
  //      Object.assign(a,{quatity:1,total:a.price})
  //    });
  //   }

  addToCart(item :any){
      this.cartService.addToCart(item);
  }
}
