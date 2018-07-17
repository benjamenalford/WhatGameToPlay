import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { GameListItem } from '../models/GameListItem';
import { GameListSearchDTO } from '../models/GameListSearchDTO';
import { BGGApiService } from '../services/bggapi.service';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {
  public gameSearchForm: FormGroup;
  private gameList: GameListItem[] = [];
  public gameSearchObject: GameListSearchDTO = new GameListSearchDTO();
  public filteredGameList: GameListItem[] = [];
  constructor(private formBuilder: FormBuilder, private BGGApi: BGGApiService) { }

  ngOnInit() {
    this.createForm();
    console.log(this.gameSearchForm);
    this.BGGApi.getGameList().subscribe(e => this.gameList = e);
  }

  createForm() {
    this.gameSearchForm = this.formBuilder.group(this.gameSearchObject);
  }

  search() {
    this.gameSearchObject = (this.gameSearchForm.value);
    this.filteredGameList = this.gameList
      .filter(
        g => (g.minPlayers >= this.gameSearchObject.numberOfPlayers || g.maxPlayers <= this.gameSearchObject.numberOfPlayers)
          && (g.playingTime >= this.gameSearchObject.minTimeToPlay)
      );
  }
}
