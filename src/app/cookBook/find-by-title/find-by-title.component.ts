import {Component, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../models/Recipe';
import {RecipeService} from '../../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-find-by-title',
  templateUrl: './find-by-title.component.html',
  styleUrls: ['./find-by-title.component.css']
})
export class FindByTitleComponent implements OnInit {
  recipeFoundByName: Recipe;
  norecipes = 1;
  inputValue = '';
  constructor(private recipeService: RecipeService, private router: Router) {
  }

  ngOnInit() {
  }
  findByName(name) {
    this.recipeService.findByName(name.value).subscribe((res) => {
      if (res.text!=='err') {
        this.recipeFoundByName = res;
        this.norecipes = 1;
      } else {
        this.recipeFoundByName = null;
        this.norecipes = 2;
      }
      this.router.navigate(['foundC'], {queryParams: {recipe: JSON.stringify(this.recipeFoundByName), noRecipes: this.norecipes}});
    });
  }

  getValue(form){
    this.inputValue = form.value;
  }

  }

