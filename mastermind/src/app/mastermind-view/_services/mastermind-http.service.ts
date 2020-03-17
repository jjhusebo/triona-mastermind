import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Guess, MastermindDataService } from './mastermind-data.service';

@Injectable({
  providedIn: 'root'
})
export class MastermindHttpService {
  private url: string;

  constructor(private http: HttpClient, private data: MastermindDataService) {
    this.url = 'http://localhost:5000/api/';

    this.getGuesses();
  }

  getGuesses() {
    this.http.get<Guess[]>(this.url + 'guess').subscribe(res => {
      this.data.setLastGuesses(res);
    });
  }

  postGuess(value: string) {
    const guess: Guess = {
      guessString: value
    };
    this.http.post<Guess[]>(this.url + 'guess', guess).subscribe(res => {
      this.data.setLastGuesses(res);
    });
  }
}
