import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient ('salt', 40),
    new Ingredient ('pepper', 70),
    new Ingredient ('lemon', 20),
  ];

  constructor() { }

  ngOnInit() {
  }

}
