import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MastermindViewComponent } from './mastermind-view/mastermind-view.component';

const routes: Routes = [ { path: '', pathMatch: 'full', component: MastermindViewComponent } ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
