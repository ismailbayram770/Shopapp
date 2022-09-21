import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  editing:boolean=false;
  category:Category= new Category();

  constructor(private activateRouter:ActivatedRoute,private repository:CategoryRepository,private router:Router) { 
    this.editing=this.activateRouter.snapshot.params['mode']=='edit';
    if(this.editing){
      this.category = this.repository.getCategory(this.activateRouter.snapshot.params['id']);
    }
  }

  ngOnInit(): void {
  }

  save(form:NgForm){
    this.repository.saveCategory(this.category);
    this.router.navigateByUrl('/admin/main/categories');
  }

}
