import {Component, OnInit} from '@angular/core';
import {RecipeService} from './services/recipe.service';
import {Recipe} from './models/Recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  recipes: Recipe[] = [];
  recipeFoundByName: Recipe;
  recipe: Recipe;
  photosToUpload: File[];
  photosToUpdate: File[];
  deletedRecipe: {};
  updatedRecipe: {};
  constructor(private recipeService: RecipeService) {
  }
  ngOnInit() {
  }
  findAll() {
    this.recipeService.findAll().subscribe((res) => this.recipes = res);
  }
  findByName(name) {
    this.recipeService.findByName(name.value).subscribe((res) => this.recipeFoundByName = res);
  }
  create(form) {
    this.recipeService.create(form.value).subscribe((res) => {
      this.recipeService.uploadPhoto(this.photosToUpload, res).subscribe(() => {});
    });
  }
  update(form) {
    this.recipe = {...this.recipe, ...form.value};
    this.recipeService.updateRecipe(this.recipe.name, this.recipe).subscribe((res) => {
      this.recipeService.updatePhoto(this.photosToUpdate, res).subscribe((response) => {
        this.updatedRecipe = response;
      });
    });
  }
  delete(form) {
    this.recipeService.deleteRecipe(form.value).subscribe((res) => this.deletedRecipe = res ? res : {});
  }
  deleteAllRecipes() {
    this.recipeService.deleteAllRecipes().subscribe(() => {});
  }
  fileUploadEvent(event: any) {
    this.photosToUpload = (<any>event.target).files;
  }
  fileUpdateEvent(event: any) {
    this.photosToUpdate = (<any>event.target).files;
  }
}
