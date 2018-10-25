import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './modules/to-do-list/to-do-list.component';
import { FormsValidatorsComponent } from './modules/forms-validators/forms-validators.component';
import { RecipesComponent } from './modules/recipes/recipes.component';
import { RecipesPageComponent } from './shared/pages/recipes-page/recipes-page.component';

const routes: Routes = [
  { path: 'to-do-list', component: ToDoListComponent },
  { path: 'forms', component: FormsValidatorsComponent },
  { path: 'recipes', component: RecipesPageComponent },
  { path: '', redirectTo: '/to-do-list', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
