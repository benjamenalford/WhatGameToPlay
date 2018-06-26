import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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
