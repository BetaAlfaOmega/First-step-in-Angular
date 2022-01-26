//Mettre dans app.commponent.ts tout les valeurs global

import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/Rx';
import { LOCATION_INITIALIZED } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

// SERVICES: implementer OnInit
export class AppComponent implements OnInit, OnDestroy {
  secondes: number = 0;
  counterSubscription: Subscription = new Subscription();

  constructor() {}

  ngOnInit() {
    const counter = Observable.interval(1000); //crée un observable qui emetra un chiffre toutes les secondes
    // counter.subscribe(
    //   //.subscribe: métode qui permet de souscrire une observable, d'observer une observable et de réagir à ses changements

    //   // les arguments
    //   //1. celui qui recoit les données
    //   (value: number) => {
    //     this.secondes = value;
    //   },
    //   //2. si il y a une erreur émise par l'observable
    //   (error: any) => {
    //     console.log('erreur');
    //   },
    //   //3. si l'observable est complète
    //   () => {
    //     console.log('complete');
    //   }
    // );

    this.counterSubscription = counter.subscribe((value: number) => {
      this.secondes = value;
    });
    // console.log(this.secondes); tsy mety ty eto ty
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe; //détruit la souscription à la fin de la vie du component
  }
}
