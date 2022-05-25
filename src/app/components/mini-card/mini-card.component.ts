import { Component, OnInit } from '@angular/core';
import { NamedAPIResource } from 'src/app/models/named-apiresource';

import { PokemonService } from './../../services/pokemon.service';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
})
export class MiniCardComponent implements OnInit {
  apiResponse!: NamedAPIResource[];

  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {
    this.pokeService.getAllPokemons().subscribe((response) => {
      this.apiResponse = response.results;
    });
  }
}

/* = [
    {
      name: 'bulbasaur',
      types: 'grass',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      class: 'green',
    },
    {
      name: 'charmander',
      types: 'fire',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
      class: 'red',
    },
    {
      name: 'pikachu',
      types: 'eletric',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      class: 'yellow',
    },
    {
      name: 'squirtle',
      types: 'water',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      class: 'blue',
    },
  ]; */
