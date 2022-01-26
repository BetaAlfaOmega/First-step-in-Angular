import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss'],
})
// SERVICES: implementer OnInit
export class AppareilViewComponent implements OnInit {
  lastUpdate = new Date();
  promise = new Promise((resolve, reject) => {
    const test = 'test promise; pipe |async';
    setTimeout(() => {
      resolve(test);
    }, 2000);
  });

  isAuth = false;

  //SERVICES: créer un tableau pour acceuillir les données
  appareils: any[] = [];

  //SUbscription:
  appareilSubscription: Subscription = new Subscription();

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
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEtteindre() {
    this.appareilService.switchOffAll();
  }
}
