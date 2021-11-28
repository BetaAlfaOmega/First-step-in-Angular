import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss'],
})
export class SingleAppareilComponent implements OnInit {
  appareil: any;
  name: string = 'Appareil';
  status: string = 'status';

  constructor(
    private appareilService: AppareilService,
    //ROUTING: activatedRoute contient toutes les informations de la route active, contient les informations du fragment :id
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; //retourne une chaine de caractère
    this.appareil = this.appareilService.getAppareilById(+id); // +id pour caster en tant que chiffre
    this.name = this.appareil.name;
    this.status = this.appareil.status;
  }
}
