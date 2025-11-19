import { Component } from '@angular/core';
import {CardService} from '../../services/card.service';
import {Card} from '../../models/card.model';
import {CardComponent} from '../card/card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-player-card',
  imports: [
    CardComponent,
    NgForOf
  ],
  templateUrl: './player-hand.component.html',
  styleUrl: './player-hand.component.css'
})
export class PlayerHandComponent {
  cards: Card[];

  constructor(cardService: CardService) {
    this.cards = cardService.getPlayerCards();
  }
}
