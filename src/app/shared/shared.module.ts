import {NgModule} from '@angular/core';
import {MaterialModule} from './modules/material.module';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ClearDialogComponent } from './components/clear-dialog/clear-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [
    HeaderComponent,
    ClearDialogComponent,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    HeaderComponent,
    FlexLayoutModule
  ]
})

export class SharedModule {
}
