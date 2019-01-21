import {Component, OnInit, Output} from '@angular/core';
import {Recipe} from '../models/Recipe';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit {
  recipes: Recipe[] = [];
  recipeFoundByName: Recipe;
  recipe: Recipe;
  photosToUpload: File[];
  photosToUpdate: File[];
  deletedRecipe: {};
  updatedRecipe: {};
  norecipes = 0;
  allVersions: Recipe[] = [];
  constructor(private recipeService: RecipeService) {
  }
  ngOnInit() {
  }
  findAll() {
    this.recipeService.findAll().subscribe((res) => {
      if(res.length !== 0) {
        this.recipes = res;
        this.norecipes = 2;
      } else {
        this.recipes = [];
        this.norecipes = 1;
      }
    } );
  }
  findByName(name) {
    this.recipeService.findByName(name.value).subscribe((res) => this.recipeFoundByName = res);
  }
  viewAllVersions(id) {
    this.recipeService.viewAllVersions(id).subscribe((res) =>{
      console.log(res);
      this.recipeService.dataSource.next(res);
    });
  }
  create(form) {
    this.recipeService.create(form.value).subscribe((res) => {
      this.recipeService.uploadPhoto(this.photosToUpload, res).subscribe((response) => {});
    });
  }
  update(form) {
    this.recipe = {...this.recipe, ...form.value};
    this.recipeService.updateRecipe(this.recipe.name, this.recipe).subscribe((res) => {
      console.log(res);
      this.recipeService.updatePhoto(this.photosToUpdate, res).subscribe((response) => {
        this.updatedRecipe = response;
      });
    });
  }
  delete(form) {
    this.recipeService.deleteRecipe(form.value).subscribe((res) => this.deletedRecipe = res ? res : {});
  }
  deleteAllRecipes() {
    this.recipeService.deleteAllRecipes().subscribe(() => {
      this.recipes = null;
    });
  }
  fileUploadEvent(event: any) {
    this.photosToUpload = (<any>event.target).files;
  }
  fileUpdateEvent(event: any) {
    this.photosToUpdate = (<any>event.target).files;
  }
}
