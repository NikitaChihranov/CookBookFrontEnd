import {Component, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../models/Recipe';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})
export class FoundComponent implements OnInit {
  recipeFoundByName: Recipe;
  norecipes = 1;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.recipeFoundByName = JSON.parse(params.recipe);
      this.norecipes = params.noRecipes;
    });
  }

  viewAllVersions(id) {
    this.recipeService.viewAllVersions(id).subscribe((res) => {
      this.recipeService.dataSource.next(res);
    });
  }
}
