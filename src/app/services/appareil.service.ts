export class AppareilService {
  appareils = [
    {
      id: 0,
      name: 'Machine à laver',
      status: 'éteint',
    },
    { id: 1, name: 'Ordinateur', status: 'allumé' },
    { id: 2, name: 'Télévision', status: 'éteint' },
  ];

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
  }

  //éteindre tous les appareils
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  //allumer un seul
  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
  }

  // étteindre un seul
  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
