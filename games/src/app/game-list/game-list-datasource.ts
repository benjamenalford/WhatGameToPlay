import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';

import { BGGApiService } from '../services/bggapi.service';

// TODO: Replace this with your own data model type
// export interface GameListItem {
//   name: string;
//   id: number;
// }
export interface GameListItem {
  gameId: number;
  name: string;
  image: string;
  thumbnail: string;
  minPlayers: number;
  maxPlayers: number;
  playingTime: number;
  isExpansion: boolean;
  yearPublished: number;
  bggRating: number;
  averageRating: number;
  rank: number;
  numPlays: number;
  rating: number;
  owned: boolean;
  preOrdered: boolean;
  forTrade: boolean;
  previousOwned: boolean;
  want: boolean;
  wantToPlay: boolean;
  wantToBuy: boolean;
  wishList: boolean;
  userComment: string;
}
// TODO: replace this with real data from your application
const EXAMPLE_DATA: GameListItem[] = [
  {
    'gameId': 7865,
    'name': '10 Days in Africa',
    'image': 'https://cf.geekdo-images.com/original/img/k0YHQxddSd7-fTmuamxpZiwI1Xs=/0x0/pic1229634.jpg',
    'thumbnail': 'https://cf.geekdo-images.com/thumb/img/Kk309UtSrQu3flO3Rs_Vxuumvd4=/fit-in/200x150/pic1229634.jpg',
    'minPlayers': 2,
    'maxPlayers': 4,
    'playingTime': 25,
    'isExpansion': false,
    'yearPublished': 2003,
    'bggRating': 0,
    'averageRating': 6.56336,
    'rank': 1645,
    'numPlays': 4,
    'rating': -1,
    'owned': false,
    'preOrdered': false,
    'forTrade': false,
    'previousOwned': false,
    'want': false,
    'wantToPlay': false,
    'wantToBuy': false,
    'wishList': false,
    'userComment': ''
  }
];

/**
 * Data source for the GameList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class GameListDataSource extends DataSource<GameListItem> {
  data: GameListItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort, private bggAPI: BGGApiService) {
    super();
    this.bggAPI.getGameList().subscribe(e => this.data = <GameListItem[]>e);
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<GameListItem[]> {

    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: GameListItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: GameListItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.gameId, +b.gameId, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
