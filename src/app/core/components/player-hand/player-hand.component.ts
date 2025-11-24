import {Component, OnInit} from '@angular/core';
import {HandService} from '../../services/hand.service';
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
export class PlayerHandComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: HandService) {
  }

  ngOnInit(): void {
    this.cardService.getPlayerHand().subscribe(
      cards => {
        if (!cards) {
          return;
        }
        this.cards = cards.unplayedCards;
      });
  }
}
