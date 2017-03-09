import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

let charactersUrl = 'api/characters.json';

export class Character {
    id:number;
    name:string;
    side:string;
}

@Injectable()
export class CharacterService {
    constructor(private http:Http) {
    }

    getCharacter(id:number) {
        return this.getCharacters()
            .map(characters => characters.find(character => character.id === id));
    }

    getCharacters() {
        return this.http
            .get(charactersUrl)
            .map((response:Response) => <Character[]>response.json().data);
    }
}
