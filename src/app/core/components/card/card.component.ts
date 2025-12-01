import {Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, SimpleChanges, ViewChild} from '@angular/core';
import {Card} from '../../models/card.model';
import {Rank} from '../../models/rank.model';


@Component({
  selector: 'app-card',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card: Card | undefined;

  @ViewChild('playingCard') playingCardEl: ElementRef | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['card'] && this.playingCardEl) {
      this.updateAttributes();
    }
  }

  ngAfterViewInit() {
    this.updateAttributes();
  }

  updateAttributes() {
    if (!this.playingCardEl || !this.card) return;

    const el = this.playingCardEl.nativeElement;

    // Workaround for library bug: attributeChangedCallback ignores changes if oldValue is null.
    // We must ensure there is an 'oldValue' before setting the real one.

    const targetRank = this.rankString;
    const targetSuit = this.suitString;

    // 1. Set a dummy value first (that is not the target, to ensure a change occurs)
    // We use "0" because it's a string, and "0" is truthy in 'l && ...' check?
    // Wait, "0" string is truthy. But let's be safe.
    // Actually, the bug skips the FIRST set. So we just need to set it twice.

    // Step 1: Set to something dummy. The library will ignore this update (render-wise)
    // but the DOM attribute will update.
    el.setAttribute('rank', 'dummy');
    el.setAttribute('suit', 'dummy');

    // Step 2: Set to the real value immediately.
    // The library's attributeChangedCallback will see oldValue="dummy" (truthy),
    // so it will proceed to render.
    el.setAttribute('rank', targetRank);
    el.setAttribute('suit', targetSuit);  }

  get rankString(): string {
    if (!this.card) return '';

    // Handle numeric ranks (TWO..TEN) -> "2".."10"
    // Handle face cards (JACK, QUEEN, KING, ACE) -> "Jack", "Queen", "King", "Ace"

    switch (this.card.rank) {
      case Rank.ACE: return 'Ace';
      case Rank.TWO: return '2';
      case Rank.THREE: return '3';
      case Rank.FOUR: return '4';
      case Rank.FIVE: return '5';
      case Rank.SIX: return '6';
      case Rank.SEVEN: return '7';
      case Rank.EIGHT: return '8';
      case Rank.NINE: return '9';
      case Rank.TEN: return '10';
      case Rank.JACK: return 'Jack';
      case Rank.QUEEN: return 'Queen';
      case Rank.KING: return 'King';
      default: return '';
    }
  }

  get suitString(): string {
    if (!this.card) return '';
    // Assuming Suit enum values are "SPADES", "HEARTS", etc.
    // We need "Spades", "Hearts", etc.
    const s = this.card.suit.toString();
    let res = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    return res;
  }
}
