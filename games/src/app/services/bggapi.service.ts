import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BGGApiService {

  constructor(private http: HttpClient) { }

  getGameList() {
    // https://bgg-json.azurewebsites.net/collection/edwalter
    this.http.get('https://bgg-json.azurewebsites.net/collection/edwalter').subscribe(e => console.log(e));

  }
}
