import { Injectable } from '@angular/core';
import {Card} from '../models/card.model';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';
import {Hand} from '../models/hand';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HandService {

  private serviceUrl = environment.baseUrl + '/hands/';

  constructor(private http: HttpClient) { }


  getPlayerHand(): Observable<Hand> {
    return this.http.get<Hand>(this.serviceUrl).pipe(
      tap((hand: Hand ) => {
      }),
      catchError((error) => {
        throw error;
      })
    );
  }
}
