import {Component, OnInit, Output} from '@angular/core';
import {RecipeService} from './services/recipe.service';
import {Recipe} from './models/Recipe';
import {AllRecipes} from './models/AllRecipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  recipes: Recipe[] = [];
  recipeFoundByName: {};
  recipe: Recipe;
  photosToUpload: File[];
  photosToUpdate: File[];
  deletedRecipe: {};
  updatedRecipe: {};
  norecipes = 0;
  @Output() allVersions: Recipe[] = [];
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
      this.allVersions = res;
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
    this.recipeService.deleteAllRecipes().subscribe(() => {});
  }
  fileUploadEvent(event: any) {
    this.photosToUpload = (<any>event.target).files;
  }
  fileUpdateEvent(event: any) {
    this.photosToUpdate = (<any>event.target).files;
  }
}
