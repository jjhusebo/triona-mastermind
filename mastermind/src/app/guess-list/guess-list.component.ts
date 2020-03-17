import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MastermindDataService, Guess } from '../mastermind-view/_services/mastermind-data.service';

@Component({
  selector: 'app-guess-list',
  templateUrl: './guess-list.component.html',
  styleUrls: [ './guess-list.component.css' ]
})
export class GuessListComponent implements OnInit {
  @Output() winner = new EventEmitter();
  results$: Observable<Guess[]>;
  constructor(private data: MastermindDataService) {}

  ngOnInit(): void {
    this.results$ = this.data.lastGuesses$.pipe(
      tap(res => {
        if (res.length > 0) {
          const lastGuess = res[res.length - 1];
          if (lastGuess.blacks > 3) {
            this.winner.emit({ correctCode: lastGuess.guessString });
          }
        }
      })
    );
  }
}
