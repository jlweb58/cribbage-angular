import { Routes } from '@angular/router';
import {PlayerHandComponent} from './core/components/player-hand/player-hand.component';
import {CardComponent} from './core/components/card/card.component';
import {DealComponent} from './core/components/deal/deal.component';
import {GameComponent} from './core/components/game/game.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'player-hand', component: PlayerHandComponent},
  {path: 'card', component: CardComponent},
  {path: 'deal', component: DealComponent},
  {path: 'game', component: GameComponent}

];
