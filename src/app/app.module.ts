import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonService } from './services/pokemon.service';
import { MiniCardComponent } from './components/mini-card/mini-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
