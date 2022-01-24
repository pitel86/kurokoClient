import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from './../../models/character';
import { CharactersService } from './../../services/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {
  public character!: CharacterInterface;
  constructor(private activatedRoute: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.drawCharacter();
  }

  public drawCharacter(){
    this.activatedRoute.paramMap.subscribe((params) => {
      const idCharacter = params.get('idCharacter');

      this.charactersService.getCharacter(idCharacter).subscribe((data:any) => {
        const apiResult: CharacterInterface = data;
        this.character = apiResult;
        
      })
    })
  }

}
