import {Component, OnInit} from '@angular/core';
import {HandService} from '../../services/hand.service';
import {Card} from '../../models/card.model';
import {CardComponent} from '../card/card.component';


@Component({
  selector: 'app-player-card',
  imports: [
    CardComponent
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

  onCardSelected(card: Card): void {
    if (card.selected) {
      // Always allow deselecting
      card.selected = false;
    } else {
      // Only allow selecting if less than 2 are currently selected
      const selectedCount = this.cards.filter(c => c.selected).length;
      if (selectedCount < 2) {
        card.selected = true;
      }
    }
  }

  get canSendToCrib(): boolean {
    return this.cards.filter(c => c.selected).length === 2;
  }

  sendToCrib(): void {
    if (this.canSendToCrib) {
      // Remove selected cards from the hand
      this.cards = this.cards.filter(c => !c.selected);
      // TODO: Add logic to actually add these cards to the Crib
    }
  }
}
