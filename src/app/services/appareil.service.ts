import { Subject } from 'rxjs';

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
}
