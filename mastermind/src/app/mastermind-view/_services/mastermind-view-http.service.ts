import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Guess {
  guessString: string;
}

export interface GuessResult {
  guesses: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MastermindViewHttpService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:5000/api/';
  }

  getGuesses(): Observable<any> {
    return this.http.get<Guess>(this.url + 'guess').pipe(
      map(res => {
        return res;
      })
    );
  }

  guess(value: string) {
    const guess: Guess = { guessString: value };
    this.http.post(this.url + 'guess', guess).subscribe(res => console.log(res));
  }
}
