import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-alertbox',
  templateUrl: './alertbox.component.html',
  styleUrls: ['./alertbox.component.scss']
})
export class AlertboxComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<AlertboxComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
