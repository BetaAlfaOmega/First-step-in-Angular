//Mettre dans app.commponent.ts tout les valeurs global

import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

// SERVICES: implementer OnInit
export class AppComponent implements OnInit {
  lastUpdate = new Date();
  promise = new Promise((resolve, reject) => {
    const test = 'test promise; pipe |async';
    setTimeout(() => {
      resolve(test);
    }, 2000);
  });

  appareilOne = 'Machine à lavé';
  // appareils = [
  //   {
  //     name: 'Machine à laver',
  //     status: 'éteint',
  //   },
  //   {
  //     name: 'Ordinateur',
  //     status: 'allumé',
  //   },
  //   {
  //     name: 'Télévision',
  //     status: 'éteint',
  //   },
  // ];
  isAuth = false;

  // exercice
  // posts = [
  //   {
  //     title: 'post1',
  //     content: 'lorem ipsum dolor blabla bla bal bal lorem',
  //     loveIts: 0,
  //     createdAt: new Date(),
  //   },
  //   {
  //     title: 'post2',
  //     content: 'lorem ipsum dolor blabla bla bal bal lorem',
  //     loveIts: 0,
  //     createdAt: new Date(),
  //   },
  //   {
  //     title: '',
  //     content: '',
  //     loveIts: 15,
  //     createdAt: new Date(),
  //   },
  // ];

  //SERVICES: créer un tableau pour acceuillir les données
  appareils: any[] = [];

  //constructor: executé au moment de la création du component
  constructor(
    // SERVICES: creer une variable de type appareilService
    private appareilService: AppareilService
  ) {
    // ex: timeout, simiulation
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  // SERVICES: créer une fonction ngOnInit
  //exécuté au moment de la création du component APRES le constructor
  // (c'est logique)
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEtteindre() {
    this.appareilService.switchOffAll();
  }
}
