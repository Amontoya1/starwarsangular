import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonagemsService {


 /* personagens: any = [{

      "name": "luke skywalker",
      "height": "172",
      "gender": "male",
      "created": "2014-12-09T13:50:51.644000Z",
      "price": "29.99",
      "rating": "4.5673",
    },
    {
      "name": "darth vader",
      "height": "202",
      "gender": "male",
      "created": "2014-12-20T13:50:51.644000Z",
      "price": "49.99",
      "rating": "4.8673",
    }];*/


  constructor(private http: HttpClient) {}

    getTodos(){
    return this.http.get('https://swapi.dev/api/people/');
  }
  getPersonagem(id) {
    return this.http.get('https://swapi.dev/api/people/'+id);
  }
}
