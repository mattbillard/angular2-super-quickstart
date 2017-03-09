import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Character, CharacterService } from '../../services/character.service';

@Component({
  moduleId: module.id,
  selector: 'list',
  templateUrl: 'list.component.html',
})
export class ListComponent implements OnInit {
  characters:Observable<Character[]>;

  constructor(private characterService:CharacterService) {
  }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }
}
