import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  // public charactersURL: string = "http://localhost:5000/api/characters";
  public charactersURL: string = "https://kuroko-server.vercel.app/api/characters";

  constructor(private httpClient: HttpClient) { }
  
  public getAllCharacters() {
    return this.httpClient.get(this.charactersURL)
  }

  public getCharacter(idCharacter: any) {
    return this.httpClient.get(`${this.charactersURL}/${idCharacter}`)
  }
}
