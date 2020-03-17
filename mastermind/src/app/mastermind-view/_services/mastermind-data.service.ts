import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Guess {
  guessString: string;
  whites?: number;
  blacks?: number;
}

@Injectable({
  providedIn: 'root'
})
export class MastermindDataService {
  private lastGuesses = new BehaviorSubject<Guess[]>([]);
  get lastGuesses$(): Observable<Guess[]> {
    return this.lastGuesses.asObservable();
  }

  constructor() {}
  setLastGuesses(res: Guess[]) {
    this.lastGuesses.next(res);
  }
}
