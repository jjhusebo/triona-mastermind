import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CharacterBoxComponent } from './character-box/character-box.component';
import { MastermindHttpService } from '../mastermind-view/_services/mastermind-http.service';

@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: [ './code-input.component.css' ]
})
export class CodeInputComponent implements OnInit, AfterViewInit {
  @ViewChild('box1') box1: CharacterBoxComponent;
  @ViewChild('box2') box2: CharacterBoxComponent;
  @ViewChild('box3') box3: CharacterBoxComponent;
  @ViewChild('box4') box4: CharacterBoxComponent;

  constructor(private http: MastermindHttpService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  submitGuess() {
    const guess = this.box1.value + this.box2.value + this.box3.value + this.box4.value;
    if (!guess) {
      return;
    }

    this.http.postGuess(guess);
  }
}
