import { PlanetasService } from './../../services/planetas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  planetas: any = [];

  constructor(planetasServ: PlanetasService) {
   planetasServ.getTodos().subscribe(planetas => {
   this.planetas = planetas['results']
   console.log(planetas)
});

  }

  ngOnInit(): void {
  }

}
