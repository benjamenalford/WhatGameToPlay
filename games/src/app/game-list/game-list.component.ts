import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

import { BGGApiService } from '../services/bggapi.service';
import { GameListDataSource } from './game-list-datasource';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: GameListDataSource;

  constructor(private bggAPI: BGGApiService) {

  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['gameId', 'name', 'minPlayers', 'maxPlayers', 'thumbnail'];

  ngOnInit() {
    this.dataSource = new GameListDataSource(this.paginator, this.sort, this.bggAPI);
  }
  // filtration
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter(filterValue);
  }
}
