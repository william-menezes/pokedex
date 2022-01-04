import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  pokemon = {
    id: 1,
    name: 'bulbasaur',
    types: 'grass',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    class: 'green',
  };

  constructor() {}

  ngOnInit(): void {}
}
