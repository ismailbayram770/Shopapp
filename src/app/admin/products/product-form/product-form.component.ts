import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  editing:boolean=false;
  product:Product=new Product();

  constructor(private activateRouter:ActivatedRoute,private repository:ProductRepository,private router:Router) {
    this.editing=this.activateRouter.snapshot.params['mode']=='edit';
    if(this.editing){
      this.product = this.repository.getProduct(this.activateRouter.snapshot.params['id']);
    }
   }

  ngOnInit(): void {
  }

  save(form:NgForm){
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }

}
