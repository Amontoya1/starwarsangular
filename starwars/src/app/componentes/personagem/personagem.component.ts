import { PersonagemsService } from './../../services/personagems.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';


@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {



  constructor(private Routes: ActivatedRoute, private personagemsServ: PersonagemsService) { }
  id: number;
  personagem: any;

  ngOnInit(): void {

    this.Routes.params.subscribe(params => {
      this.id = params['id'];

      this.personagemsServ.getPersonagem(this.id).subscribe(personagem => {
        console.log(personagem);
        this.personagem = personagem;
      });
    });
  }
}
