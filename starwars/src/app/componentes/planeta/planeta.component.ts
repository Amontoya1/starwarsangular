import { PlanetasService } from './../../services/planetas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {


constructor(private Routes: ActivatedRoute, private planetasServ: PlanetasService) { }

id: number;
planeta: any;


ngOnInit(): void {

  this.Routes.queryParams.subscribe( params => {
  if (params['id']) {

  this.planetasServ.getPlaneta(this.id).subscribe(planeta => {
  console.log(planeta);
  this.planeta = planeta
}
  );
}
  }
  )

}}
