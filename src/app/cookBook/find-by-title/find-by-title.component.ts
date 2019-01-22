import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../models/Recipe';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-find-by-title',
  templateUrl: './find-by-title.component.html',
  styleUrls: ['./find-by-title.component.css']
})
export class FindByTitleComponent implements OnInit {
  recipeFoundByName: Recipe;
  norecipes = 0;
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  findByName(name) {
    this.recipeService.findByName(name.value).subscribe((res) => {
      if (res) {
        this.recipeFoundByName = res;
        this.norecipes = 1;
      } else {
        this.norecipes = 2;
      }
    });
  }

  viewAllVersions(id) {
    this.recipeService.viewAllVersions(id).subscribe((res) => {
      console.log(res);
      this.recipeService.dataSource.next(res);
    });
  }
}
