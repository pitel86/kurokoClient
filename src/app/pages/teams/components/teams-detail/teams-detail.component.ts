import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamInterface } from '../../models/team';
import { TeamsService } from '../../services/teams.service';



@Component({
  selector: 'app-teams-detail',
  templateUrl: './teams-detail.component.html',
  styleUrls: ['./teams-detail.component.scss']
})
export class TeamsDetailComponent implements OnInit {
  public team!: TeamInterface;
  constructor(private activatedRoute: ActivatedRoute, private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.drawTeam();
  }

  public drawTeam(){
    this.activatedRoute.paramMap.subscribe((params) => {
      const idTeam = params.get('idTeam');

      this.teamsService.getTeam(idTeam).subscribe((data:any) => {
        const apiResult: TeamInterface = data;
        this.team = apiResult;        
      })
    })
  }

}
