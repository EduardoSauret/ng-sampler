import { Component, OnInit, ElementRef, Inject  } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ClearDialogComponent } from '../../shared/components/clear-dialog/clear-dialog.component';

@Component({
  selector: 'app-simple-form-validation',
  templateUrl: './forms-validators.component.html',
  styleUrls: ['./forms-validators.component.scss']
})
export class FormsValidatorsComponent implements OnInit {

  myitemElement: ItemElement = {
    emailAddress: '',
    subscription: '2',
    password: ''
  };

  subscriptionsCombo: Array<any> = [{
    subscription: '1',
    subscriptionName: 'Basic',
  }, {
    subscription: '2',
    subscriptionName: 'Advanced',
  }, {
    subscription: '3',
    subscriptionName: 'Pro',
  }
  ];

  constructor( public dialog: MatDialog) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    // form.reset();
  }

  onClearForm(form: NgForm ): void {
    const dialogRef = this.dialog.open(ClearDialogComponent, {
      width: '250px',
      // data: {email: this.myitemElement.emailAddress, subscription: this.myitemElement.subscription}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
      // form.reset();
    });
  }

}

export interface ItemElement {
  emailAddress: string;
  subscription: string;
  password: string;
}
