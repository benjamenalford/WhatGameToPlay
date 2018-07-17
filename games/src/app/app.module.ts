import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameSearchComponent } from './game-search/game-search.component';
import { HomeComponent } from './home/home.component';
import { BGGApiService } from './services/bggapi.service';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    HomeComponent,
    SideNavComponent,
    GameSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [BGGApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
