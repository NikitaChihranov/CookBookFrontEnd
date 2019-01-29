import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../services/recipe.service';
import {Recipe} from '../../models/Recipe';

@Component({
  selector: 'app-create-c',
  templateUrl: './create-c.component.html',
  styleUrls: ['./create-c.component.css']
})
export class CreateCComponent implements OnInit {
  createdRecipe: Recipe;
  photosToUpload: File[];
  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
  }
  create(form) {
    this.recipeService.create(form.value).subscribe((res) => {
      this.recipeService.uploadPhoto(this.photosToUpload, res).subscribe((response) => {
        this.createdRecipe = response;
      });
    });
  }
  fileUploadEvent(event: any) {
    this.photosToUpload = (<any>event.target).files;
  }

}
