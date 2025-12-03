import { Component } from '@angular/core';
import {GameService} from '../../services/game.service';
import {Game} from '../../models/game';
import {MatCard} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game',
  imports: [
    MatCard,
    MatButton,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  game: Game | undefined;

  constructor(private gameService: GameService, private router: Router  ) { }

  onSubmit() {
    this.gameService.startGame().subscribe({
      next: game => {
        this.game = game;
        this.router.navigate(['/deal']);
      },
      error: error => console.error(error)
    });

  }
}
