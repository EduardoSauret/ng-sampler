import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './modules/to-do-list/to-do-list.component';
import { FormsValidatorsComponent } from './modules/forms-validators/forms-validators.component';
import { RecipesComponent } from './modules/recipes/recipes.component';
import { ShoppingListComponent } from './modules/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: 'to-do-list', component: ToDoListComponent },
  { path: 'forms', component: FormsValidatorsComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
