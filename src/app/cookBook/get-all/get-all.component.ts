import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../../services/recipe.service';
import {Recipe} from '../../models/Recipe';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {
  norecipes = 0;
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
      this.recipeService.findAll().subscribe((res) => {
        if (res.length !== 0) {
          this.recipes = res;
          this.norecipes = 2;
        } else {
          this.recipes = [];
          this.norecipes = 1;
        }
      });
  }



  viewAllVersions(id) {
    this.recipeService.viewAllVersions(id).subscribe((res) => {
      this.recipeService.dataSource.next(res);
    });
  }

  sortRecipes(form) {
    let query = '';
    if (form.value === 'By date: from last to the first') {
      query = 's1';
    }
    if (form.value === 'By date: from first to the last') {
      query = 's2';
    }
    if (form.value === 'By name: A - Z') {
      query = 's3';
    }
    if (form.value === 'By name: Z - A') {
      query = 's4';
    }
    this.recipeService.sortRecipes(query).subscribe((res) => {
      this.recipes = res;
    });
  }
}
