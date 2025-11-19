import { Routes } from '@angular/router';
import {PlayerHandComponent} from './core/components/player-hand/player-hand.component';
import {CardComponent} from './core/components/card/card.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'player-hand', component: PlayerHandComponent},
  {path: 'card', component: CardComponent}

];
