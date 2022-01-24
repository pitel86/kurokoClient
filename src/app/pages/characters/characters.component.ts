import { Component, OnInit } from '@angular/core';
import { CharactersService } from './services/characters.service';
import { CharacterInterface } from './models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: CharacterInterface[] = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.drawCharacters();
  }

  public drawCharacters(): void {
    this.charactersService.getAllCharacters().subscribe((data:any )=> {
      const apiResult: CharacterInterface[] = data;

      const formattedCharacters = apiResult.map(({_id, name, age, position, dorsal, teams, image, abilities}) => ({
        _id, name, age, position, dorsal, teams, image, abilities
      }))
      console.log(formattedCharacters);
      this.characters = formattedCharacters;
    })}

}
