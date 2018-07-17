import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { GameListSearchDTO } from '../models/GameListSearchDTO';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {
  public gameSearchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    console.log(this.gameSearchForm);
  }

  createForm() {
    this.gameSearchForm = this.formBuilder.group(new GameListSearchDTO());
  }
}
