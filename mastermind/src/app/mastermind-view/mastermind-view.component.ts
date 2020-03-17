import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mastermind-view',
  templateUrl: './mastermind-view.component.html',
  styleUrls: [ './mastermind-view.component.css' ]
})
export class MastermindViewComponent implements OnInit {
  showInput = true;
  correctCode: string;
  constructor() {}

  ngOnInit(): void {}

  handleWin(event: any) {
    this.correctCode = event.correctCode;
    this.showInput = false;
  }
}
