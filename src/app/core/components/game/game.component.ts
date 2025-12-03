import { Component } from '@angular/core';
import {GameService} from '../../services/game.service';
import {Game} from '../../models/game';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  game: Game | undefined;

  constructor(private gameService: GameService) { }




}
