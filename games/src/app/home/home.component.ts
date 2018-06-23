import { Component } from '@angular/core';

import { BGGApiService } from '../services/bggapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private bggapi: BGGApiService) {
    this.bggapi.getGameList();
  }
  cards = [
    { title: 'Games', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
}
