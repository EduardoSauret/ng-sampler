import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Chilaquiles',
    'Mucha tortilla, mucha salsa, mucho queso, mucho frijoles.',
    'https://pioneerwoman.files.wordpress.com/2013/03/8523710988_5e66ec47dd_z.jpg?w=630&h=419'),
    new Recipe(
      'Fajitas',
      'Mucha tortilla, mucha salsa, mucho queso, mucho frijoles.',
      'https://pioneerwoman.files.wordpress.com/2013/03/8523710988_5e66ec47dd_z.jpg?w=630&h=419'),
    new Recipe(
      'Pozole',
      'Mucha tortilla, mucha salsa, mucho queso, mucho frijoles.',
      'https://pioneerwoman.files.wordpress.com/2013/03/8523710988_5e66ec47dd_z.jpg?w=630&h=419')
  ];

  constructor() { }

  ngOnInit() {
  }

}
