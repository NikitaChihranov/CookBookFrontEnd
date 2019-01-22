import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../services/recipe.service';

// @ts-ignore
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  photosToUpload: File[];
  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
  }
  create(form) {
    this.recipeService.create(form.value).subscribe((res) => {
      this.recipeService.uploadPhoto(this.photosToUpload, res).subscribe((response) => {});
    });
  }
  fileUploadEvent(event: any) {
    this.photosToUpload = (<any>event.target).files;
  }
}
