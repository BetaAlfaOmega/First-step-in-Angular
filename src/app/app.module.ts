import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// SERICES: importer les services
import { AppareilService } from './services/appareil.service';
// ROUTING: importer Routes et RouterModule
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { PostListComponent } from './post-list/post-list.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';

//ROUTING: indispensable pour créer des routes
const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent }, //:id est exploitable
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    PostListComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //ROUTING: pour dire que la racine de toutes le routes se trouve dans appRoutes
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    //tous les services, afaka ampiasan component reetra sy ny services reetra
    AppareilService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
