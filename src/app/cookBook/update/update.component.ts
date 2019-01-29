import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../services/recipe.service';
import {Recipe} from '../../models/Recipe';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
  }
}
