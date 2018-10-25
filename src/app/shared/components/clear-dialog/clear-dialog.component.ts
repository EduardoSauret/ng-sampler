import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormsModule, NgForm} from '@angular/forms';
import { ItemElement } from '../../../modules/forms-validators/forms-validators.component';

@Component({
  selector: 'app-clear-dialog',
  templateUrl: './clear-dialog.component.html',
  styleUrls: ['./clear-dialog.component.scss']
})
export class ClearDialogComponent implements OnInit {

  email: string;
  subscription: number;

  constructor(
    public dialogRef: MatDialogRef<ClearDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemElement) {}

  ngOnInit() {
  }

  onNoClick(form: NgForm): void {
    this.dialogRef.close();
    // form.reset();
  }

  onAcceptClick(form: NgForm): void {
    this.dialogRef.close();
  }

}
