import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-delete2',
  templateUrl: './delete2.component.html',
  styleUrls: ['./delete2.component.css']
})
export class Delete2Component implements OnInit {
  deletedRecipe: {};
  norecipe = 0;
  constructor(private recipeService: RecipeService) {
  }
  ngOnInit() {
  }
  delete(form) {
    this.recipeService.deleteRecipe(form.value).subscribe((res) => {
      if(res.text!=='err') {
        this.deletedRecipe = res ? res : {};
      }else{
        this.norecipe = 1;
      }
    });
  }
  deleteAllRecipes(){
    this.recipeService.deleteAllRecipes().subscribe((res) => {});
  }
}
