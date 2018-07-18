import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from '../../../node_modules/rxjs';
import { GameListItem } from '../models/GameListItem';


@Injectable({
  providedIn: 'root'
})
export class BGGApiService {

  private _userName = 'edwalter';
  private _gameList: Observable<any>;
  private _filteredList: GameListItem[] = [];
  private _localUser: string;

  constructor(private http: HttpClient) {
    this.init();
  }

  public get userName() {
    return this._userName;
  }
  public set userName(value) {
    this._userName = value;
  }
  init() {
    this.userName = this.getLocalUserName() || 'edwalter';
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

  getLocalUserName(): string {
    return this._localUser = localStorage.getItem('BGGUserName');
  }

  setLocalUserName(name) {
    this.userName = name;
    this._localUser = name;
    localStorage.setItem('BGGUserName', this.userName);
  }

}
