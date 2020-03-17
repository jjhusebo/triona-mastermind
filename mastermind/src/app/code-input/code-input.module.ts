import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeInputComponent } from './code-input.component';
import { CharacterBoxComponent } from './character-box/character-box.component';

@NgModule({
  declarations: [ CodeInputComponent, CharacterBoxComponent ],
  imports: [ CommonModule, FormsModule ],
  exports: [ CodeInputComponent ]
})
export class CodeInputModule {}
