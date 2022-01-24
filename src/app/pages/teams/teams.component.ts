import { Component, OnInit } from '@angular/core';
import { TeamsService } from './services/teams.service';
import { TeamInterface } from './models/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  public teams: TeamInterface [] = [];
  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.drawTeams();
  }

  public drawTeams(): void {
    this.teamsService.getAllTeams().subscribe((data:any )=> {
      const apiResult: TeamInterface[] = data;

      const formattedCharacters = apiResult.map(({_id, name, city, captain, coach, image}) => ({
        _id, name, city, captain, coach, image
      }))

      this.teams = formattedCharacters;
    })}
  }

