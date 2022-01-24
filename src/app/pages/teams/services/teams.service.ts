import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  // public teamsURL: string = "http://localhost:5000/api/teams";
  public teamsURL: string = "https://kuroko-server.vercel.app/api/teams";

  constructor(private httpClient: HttpClient) { }
  public getAllTeams() {
    return this.httpClient.get(this.teamsURL)
  }

  public getTeam(idTeam: any) {
    return this.httpClient.get(`${this.teamsURL}/${idTeam}`)
  }
}
