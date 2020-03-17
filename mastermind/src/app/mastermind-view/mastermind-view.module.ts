import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastermindViewComponent } from './mastermind-view.component';
import { CodeInputModule } from '../code-input/code-input.module';
import { GuessListModule } from '../guess-list/guess-list.module';

@NgModule({
  declarations: [ MastermindViewComponent ],
  imports: [ CommonModule, CodeInputModule, GuessListModule ]
})
export class MastermindViewModule {}
