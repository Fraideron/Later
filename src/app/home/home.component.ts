import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../_services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firebaseDb: FirebaseService) { }

  ngOnInit() {

  }

}
