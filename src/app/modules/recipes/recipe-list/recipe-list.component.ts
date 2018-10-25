import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Chilaquiles', 'Mucha tortilla, mucha salsa, mucho queso, mucho frijoles.', 'this is the path'),
    new Recipe('Fajitas', 'Mucha tortilla, mucha salsa, mucho queso, mucho frijoles.', 'this is the path'),
    new Recipe('Pozole', 'Mucha tortilla, mucha salsa, mucho queso, mucho frijoles.', 'this is the path')
  ];

  constructor( ) { }

  ngOnInit() {
  }

}
