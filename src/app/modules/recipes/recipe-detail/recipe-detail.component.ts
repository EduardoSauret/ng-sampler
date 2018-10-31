import { Component, OnInit } from '@angular/core';

export interface Option {
  value: string;
  id: number;
}

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  options: Option[] = [
    {value: 'To Shopping List', id: 1},
    {value: 'Edit Recipe', id: 2},
    {value: 'Delete Recipe', id: 3},
  ];

  constructor() { }

  ngOnInit() {
  }

}
