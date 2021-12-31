import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
})
export class MiniCardComponent implements OnInit {
  pokemons = [
    {
      name: 'bulbasaur',
      types: 'grass',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      class: 'green'
    },
    {
      name: 'charmander',
      types: 'fire',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
      class: 'red'
    },
    {
      name: 'pikachu',
      types: 'eletric',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      class: 'yellow'
    },
    {
      name: 'squirtle',
      types: 'water',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      class: 'blue'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
