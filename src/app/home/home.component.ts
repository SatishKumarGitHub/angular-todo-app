import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


 public username: string;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe( paramMap => {
      this.username = paramMap.get('username')
    } );

  }

}
