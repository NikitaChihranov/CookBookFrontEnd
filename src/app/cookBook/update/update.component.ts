import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../services/recipe.service';
import {Recipe} from '../../models/Recipe';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  recipe: Recipe;
  updatedRecipe: {};
  photosToUpdate: File[];
  constructor(private recipeService: RecipeService) {
  }
  ngOnInit() {
  }
  update(form) {
    this.recipe = {...this.recipe, ...form.value};
    this.recipeService.updateRecipe(this.recipe.name, this.recipe).subscribe((res) => {
      this.recipeService.updatePhoto(this.photosToUpdate, res).subscribe((response) => {
        this.updatedRecipe = response;
      });
    });
  }

  viewAllVersions(id) {
    this.recipeService.viewAllVersions(id).subscribe((res) =>{
      console.log(res);
      this.recipeService.dataSource.next(res);
    });
  }


  fileUpdateEvent(event: any) {
    this.photosToUpdate = (<any>event.target).files;
  }
}
