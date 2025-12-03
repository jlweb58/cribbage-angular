import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';
import {Game} from '../models/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private serviceUrl = environment.baseUrl + '/games/';

  constructor(private http: HttpClient) { }

  startGame(): Observable<Game> {

    return this.http.get<Game>(this.serviceUrl).pipe(
      tap((game: Game) => {
      }),
      catchError((error) => {
        throw error;
      })
    );
  }

}
