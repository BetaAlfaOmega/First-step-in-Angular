import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppareilService {
  appareilSubject = new Subject<any[]>(); //cree un subject

  private appareils = [
    {
      id: 0,
      name: 'Machine à laver',
      status: 'éteint',
    },
    { id: 1, name: 'Ordinateur', status: 'allumé' },
    { id: 2, name: 'Télévision', status: 'éteint' },
  ];

  constructor(private httpClient: HttpClient) {}

  //methode qui fait en sorte que le subject emette la liste des appareils et y acceder depuis l'extérieur.
  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
    //.next : force le subject à émettre ce qu'on lui passe comme argument
    //.slice : pour emettre une copie de l'array appareil
  }

  //retourner un objet appareil par son identifiant
  getAppareilById(id: number) {
    const appareil = this.appareils.find((appareilObject) => {
      return appareilObject.id === id;
    });
    return appareil;
  }

  //allumer tous les appareils
  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  //éteindre tous les appareils
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  //allumer un seul
  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }

  // éteindre un seul
  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }

  //ajouter un nouvel appareil
  addAppareil(name: string, status: string) {
    const AppareilObject = {
      id: 0,
      name: '',
      status: '',
    };
    AppareilObject.name = name;
    AppareilObject.status = status;
    AppareilObject.id = this.appareils[this.appareils.length - 1].id + 1;

    this.appareils.push(AppareilObject);
    this.emitAppareilSubject();
  }

  //enregistrer les appareils sur le serveur
  saveAppareilsToServer() {
    this.httpClient
      .put(
        'https://http-client-demo-c522a-default-rtdb.firebaseio.com/appareils.json', //path auquel on souhaite enregister les appareils.
        this.appareils
      )
      .subscribe(
        () => {
          console.log('Enregistrement terminé');
        },
        (error) => {
          console.log('erreur de sauvegarde' + error);
        }
      );
  }

  //récupérer la liste des appareils qu'on a enregistré sur le seveur
  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>( //response est de type object donc il faut le caster en any[]
        'https://http-client-demo-c522a-default-rtdb.firebaseio.com/appareils.json'
      )
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject(); //une fois les appareils récupérer, il faut emettre le subject parce que sinon on ne verra pas le changement
        },
        (error) => {
          console.log('erreur' + error);
        }
      );
  }
}
