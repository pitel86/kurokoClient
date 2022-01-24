import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TeamsDetailComponent } from './components/teams-detail/teams-detail.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TeamsComponent,
    TeamsDetailComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    HttpClientModule
  ]
})
export class TeamsModule { }
