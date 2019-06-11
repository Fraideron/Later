import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {AddPostComponent} from "../add-post/add-post.component";

@Component({
  selector: 'app-social-section',
  templateUrl: './social-section.component.html',
  styleUrls: ['./social-section.component.css']
})
export class SocialSectionComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openModal(): void {
    const dialogRef = this.dialog.open(AddPostComponent,  {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
