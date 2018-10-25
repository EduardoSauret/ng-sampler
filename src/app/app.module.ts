import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ToDoListComponent } from './modules/to-do-list/to-do-list.component';
import { FormsValidatorsComponent } from './modules/forms-validators/forms-validators.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClearDialogComponent } from './shared/components/clear-dialog/clear-dialog.component';
import {HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RecipesComponent } from './modules/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    FormsValidatorsComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ClearDialogComponent]
})
export class AppModule { }
