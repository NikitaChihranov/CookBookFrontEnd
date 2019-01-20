import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../models/Recipe';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {
  versions: Recipe[] = [];
  constructor(private recipeService: RecipeService) {
    this.recipeService.dataSource.subscribe((value => {
      for (let recipe of value){
        console.log(recipe.author);
        this.versions.push(recipe);
      }
      }
    ));
  }

  ngOnInit() {
    console.log(this.versions);
  }

}
