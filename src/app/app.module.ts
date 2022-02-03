import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FourOhForComponent } from './four-oh-for/four-oh-for.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

//ROUTING: indispensable pour créer des routes
const appRoutes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'appareils',
    canActivate: [AuthGuard],
    component: AppareilViewComponent,
  },
  {
    path: 'appareils/:id',
    canActivate: [AuthGuard],
    component: SingleAppareilComponent,
  }, //:id est exploitable
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'not-found', component: FourOhForComponent },
  { path: '**', redirectTo: '/not-found' }, //à mettre à la fin. izay midika oe ze path ankotrn ireo voatanisa reo d redirigena any amn "/not-found"
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
    FourOhForComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //formulaire
    ReactiveFormsModule,
    //ROUTING: pour dire que la racine de toutes le routes se trouve dans appRoutes
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    //tous les services, afaka ampiasan component reetra sy ny services reetra
    AppareilService,
    AuthService,
    AuthGuard,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
