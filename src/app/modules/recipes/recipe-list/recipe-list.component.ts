import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedForParent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Chilaquiles',
      'Mucha tortilla, mucha salsa, mucho queso, mucho frijoles.',
      'https://pioneerwoman.files.wordpress.com/2013/03/8523710988_5e66ec47dd_z.jpg?w=630&h=419'),
    new Recipe(
      'Fajitas',
      'Mucho pollito, mucha salsita, mucho quesito, muchos frijolitos.',
      'https://i1.wp.com/www.paleonewbie.com/wp-content/uploads/2015/08/paleo-newbie-steak-fajitas-new-1266x850.jpg?fit=1030%2C692'),
    new Recipe(
      'Pozole',
      'Mucha carne, mucho caldo, mucha lechuga, mucha cerveza.',
      'https://pioneerwoman.files.wordpress.com/2013/03/8523710988_5e66ec47dd_z.jpg?w=630&h=419')
  ];

  constructor() { }

  ngOnInit() {
  }

  recipeWasSelected(recipe: Recipe) {
    this.selectedForParent.emit(recipe);
  }


}
