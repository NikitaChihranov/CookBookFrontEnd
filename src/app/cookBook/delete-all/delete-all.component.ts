import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-delete-all',
  templateUrl: './delete-all.component.html',
  styleUrls: ['./delete-all.component.css']
})
export class DeleteAllComponent implements OnInit {

  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
  }
  deleteAllRecipes() {
    this.recipeService.deleteAllRecipes().subscribe(() => {
    });
  }
}
