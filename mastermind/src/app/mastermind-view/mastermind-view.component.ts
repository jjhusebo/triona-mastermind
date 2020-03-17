import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MastermindViewHttpService } from './_services/mastermind-view-http.service';

@Component({
  selector: 'app-mastermind-view',
  templateUrl: './mastermind-view.component.html',
  styleUrls: [ './mastermind-view.component.css' ]
})
export class MastermindViewComponent implements OnInit {
  constructor(private http: MastermindViewHttpService) {}

  ngOnInit(): void {}

  submitGuess(val: string) {
    this.http.guess(val);
  }
}
