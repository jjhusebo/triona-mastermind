import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuessListComponent } from './guess-list.component';

@NgModule({
  declarations: [ GuessListComponent ],
  imports: [ CommonModule ],
  exports: [ GuessListComponent ]
})
export class GuessListModule {}
