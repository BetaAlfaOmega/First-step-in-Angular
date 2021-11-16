export class AppareilService {
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint',
    },
    {
      name: 'Ordinateur',
      status: 'allumé',
    },
    {
      name: 'Télévision',
      status: 'éteint',
    },
  ];

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
