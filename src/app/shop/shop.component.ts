import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryRepository } from 'src/app/model/category.repository';
import { ProductRepository } from 'src/app/model/product.repository';
import { Cart } from '../model/card.model';
import { Category } from '../model/category.model';
import { Product } from '../model/product.model';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public selectorCategory:any=null;
  public productPerPage=3;
  public selectedPage:any=1;
  public selectedProducts:Product[]=[];
 
  constructor(
    private productRepository:ProductRepository,
    private catgoryRepository:CategoryRepository,
    private cart:Cart,
    private router:Router) { }

  ngOnInit(): void {
  }

  getValue(event: Event):number {
    return Number((event.target as HTMLInputElement).value);
  }
  getCategory(category:Category)
  {
    this.selectorCategory=category;
  }

  changePageSize(size:number){
    this.productPerPage=size;
    this.changePage(1);
  }

  get products():Product[] {
    let index=(this.selectedPage-1)*this.productPerPage
    this.selectedProducts=this.productRepository.getProducts(this.selectorCategory);
    return this.selectedProducts.slice(index,index+this.productPerPage);
  }
  changePage(p:Number)
  {
    this.selectedPage=p;
  }
  get pageNumbers():Number[]{
    return Array(Math.ceil(this.productRepository.getProducts(this.selectorCategory).length/this.productPerPage)).fill(0).map((a,i)=>i+1)
    
  }

  get categories():Category[] {
    return this.catgoryRepository.getCategories();
  }

  

  

}
