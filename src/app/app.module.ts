//https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvitationComponent } from '../invitation/invitation.component';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from '../hello/hello.component';
import { RsvpComponent } from '../rsvp/rsvp.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'invitation', component: InvitationComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'rsvp', component: RsvpComponent },
  { path: '',
    redirectTo: '/hello',
    pathMatch: 'full'
  }]

@NgModule({
  declarations: [
    AppComponent,
    InvitationComponent,
    HelloComponent,
    RsvpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
