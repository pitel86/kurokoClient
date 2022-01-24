import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsDetailComponent } from './components/teams-detail/teams-detail.component';
import { TeamsComponent } from './teams.component';

const routes: Routes = [
  {path: '', component: TeamsComponent},
  {path: ":idTeam", component: TeamsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
