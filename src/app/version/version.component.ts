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


  }

  ngOnInit() {
      this.recipeService.dataSource.subscribe((value => {
      this.versions.splice(0, this.versions.length);
      for (const recipe of value){
        this.versions.push(recipe);
      }
    }
  ));
  }

}
