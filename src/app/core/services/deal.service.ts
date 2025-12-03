import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DealService {

  private serviceUrl = environment.baseUrl + '/deals/';

  constructor(private http: HttpClient) { }

}
