import { Component, OnInit, Inject } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openService(id): void {
    let dialogRef = this.dialog.open(ServiceDialog, {
      width: '90%',
      height: '90%',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("closed");
    });
  }





  public carouselOne: NguCarousel;

  ngOnInit() {
  	this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }

}




@Component({
  selector: 'service-dialog',
  templateUrl: './service-dialog.html',
  styleUrls: ['./service-dialog.css']
})
export class ServiceDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ServiceDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    ) { }

    purpose = this.data;

    ngOnInit(){
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

}

