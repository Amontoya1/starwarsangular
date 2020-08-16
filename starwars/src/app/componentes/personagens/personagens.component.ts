import { PersonagemsService } from './../../services/personagems.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})

export class PersonagensComponent implements OnInit {

  personagens: any = [];

  constructor(personagemsServ: PersonagemsService) {
    personagemsServ.getTodos().subscribe(personagens => {
      this.personagens = personagens['results']
      console.log(personagens)
    });
  }

  ngOnInit(): void {
  }

}
