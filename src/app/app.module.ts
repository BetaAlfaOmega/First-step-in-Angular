import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { PostListComponent } from './post-list/post-list.component';
// importer les services
import { AppareilService } from './services/appareil.service';
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    PostListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    //tous les services, afaka ampiasan component reetra sy ny services reetra
    AppareilService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
