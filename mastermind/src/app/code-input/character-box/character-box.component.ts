import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-box',
  templateUrl: './character-box.component.html',
  styleUrls: [ './character-box.component.css' ]
})
export class CharacterBoxComponent implements OnInit {
  value = 'A';
  constructor() {}

  ngOnInit(): void {}
}
