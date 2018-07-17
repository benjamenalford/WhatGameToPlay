import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from '../../../node_modules/rxjs';
import { GameListItem } from '../models/GameListItem';


@Injectable({
  providedIn: 'root'
})
export class BGGApiService {

  private _userName = 'edwalter';
  private _gameList: Observable<any>; // = new Observable<any>();
  private _filteredList: GameListItem[] = [];
  public get userName() {
    return this._userName;
  }
  public set userName(value) {
    this._userName = value;
  }

  constructor(private http: HttpClient) {
    this.http.get('https://bgg-json.azurewebsites.net/collection/' + this._userName)
      .pipe(e => this._gameList = e);
  }

  getGameList() {
    return (this._gameList);
  }
  getSearchedList(searchString: string) {
    this._gameList.subscribe(e => this._filteredList = e);
    return this._filteredList.filter(e => e.name.includes(searchString));
  }

}
