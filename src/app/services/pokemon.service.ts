import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { NamedAPIResource } from '../models/named-apiresource';
import { Pokemon } from '../models/pokemon';
import { NamedAPIResourceList } from './../models/named-apiresource-list';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<NamedAPIResourceList> {
    return this.http.get<NamedAPIResourceList>(this.baseUrl).pipe(
      tap((response: NamedAPIResourceList) => response),
      tap((response) => {
        response.results.map((data: NamedAPIResource) => {
          this.getPokemonByName(data.name).subscribe(
            (res) => (data.status = res)
          );
        });
      })
    );
  }

  getPokemonByName(name: string) {
    return this.http.get<Pokemon>(`${this.baseUrl}/${name}`);
  }
}
