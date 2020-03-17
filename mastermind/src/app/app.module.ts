import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MastermindViewModule } from './mastermind-view/mastermind-view.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, AppRoutingModule, MastermindViewModule, HttpClientModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
