
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PersonagensComponent } from './componentes/personagens/personagens.component';
import { PlanetasComponent } from './componentes/planetas/planetas.component';
import { PlanetaComponent } from './componentes/planeta/planeta.component';
import { HomeComponent } from './componentes/home/home.component';
import { PersonagemComponent } from './componentes/personagem/personagem.component';



const APP_ROUTES: Routes = [
    {
    path: '',
    component: HomeComponent
    },

    {
    path: 'personagens',
    component: PersonagensComponent
    },

    {
    path: 'personagem/:id',
    component: PersonagemComponent
    },

    {
    path: 'planetas',
    component: PlanetasComponent
    },

    {
      path: 'planeta/:id',
      component: PlanetaComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

