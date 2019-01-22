import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  deletedRecipe: {};

  constructor(private recipeService: RecipeService) {
  }
  ngOnInit() {
  }
  delete(form) {
    this.recipeService.deleteRecipe(form.value).subscribe((res) => {
      this.deletedRecipe = res ? res : {};
    });
  }
}
