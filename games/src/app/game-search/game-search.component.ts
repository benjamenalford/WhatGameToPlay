import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {
  name = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
