import {Player} from './player';
import {Hand} from './hand';
import {Card} from './card.model';

export interface Deal {

  gameId: string;

  player1: Player;

  player2: Player;

  player1Hand: Hand;
  player2Hand: Hand;
  crib: Hand;
  cutCard: Card;

  dealer: Player;

  player1PeggingScore: number;
  player2PeggingScore: number;

  player1HandScore: number;
  player2HandScore: number;

  cribScore: number;



}
