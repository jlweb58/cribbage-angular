import { Injectable } from '@angular/core';
import {Card} from '../models/card.model';
import { Suit } from "../models/suit.model";
import { Rank } from "../models/rank.model";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }


  getPlayerCards(): Card[] {
    let cards: Card[] = [];
    cards[0] = {suit: Suit.SPADES, rank: Rank.JACK};
    cards[1] = {suit: Suit.HEARTS, rank: Rank.FOUR};
    cards[2] = {suit: Suit.DIAMONDS, rank: Rank.ACE};
    cards[3] = {suit: Suit.CLUBS, rank: Rank.TEN};
    cards[4] = {suit: Suit.SPADES, rank: Rank.KING};
    cards[5] = {suit: Suit.HEARTS, rank: Rank.SEVEN};
    return  cards;
  }
}
