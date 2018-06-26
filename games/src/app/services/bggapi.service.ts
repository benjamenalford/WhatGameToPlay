import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GameListItem } from '../game-list/game-list-datasource';


@Injectable({
  providedIn: 'root'
})
export class BGGApiService {

  userName = 'edwalter';

  constructor(private http: HttpClient) { }

  getGameList() {

    // https://bgg-json.azurewebsites.net/collection/edwalter
    return this.http.get('https://bgg-json.azurewebsites.net/collection/' + this.userName);

  }

}
