import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  @Input() categories:Category[]=[];
  public selectorCategory:any=null;
  @Output() category=new EventEmitter<Category>();
  constructor() { }

  ngOnInit(): void {
  }

  ChangeCategory(newCategory?:Category){
    this.selectorCategory=newCategory;
    this.category.emit(newCategory);
  }
}
