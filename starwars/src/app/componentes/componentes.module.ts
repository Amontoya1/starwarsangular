import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackecasePipe } from '../snackecase.pipe';

import { HomeComponent } from './home/home.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { PersonagemComponent } from './personagem/personagem.component';
import { PlanetaComponent } from './planeta/planeta.component';









@NgModule({
  declarations: [
    PersonagensComponent,
    HomeComponent,
    PlanetasComponent,
    SnackecasePipe,
    PersonagemComponent,
    PlanetaComponent




  ],
  imports: [
    CommonModule,
    RouterModule





  ],

  exports: [

    PersonagensComponent,
    HomeComponent,
    PlanetasComponent,
    PersonagemComponent,


  ]
})
export class ComponentesModule { }
