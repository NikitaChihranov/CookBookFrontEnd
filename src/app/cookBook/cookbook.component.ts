import {Component, OnInit, Output} from '@angular/core';
import {Recipe} from '../models/Recipe';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
  }


}
