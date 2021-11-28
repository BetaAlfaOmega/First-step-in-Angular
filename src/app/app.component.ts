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
export class AppComponent {
  constructor() {}
}
