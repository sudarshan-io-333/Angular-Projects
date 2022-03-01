import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/Server.component';
import { ServersComponent } from './servers/servers.component' // here we are not adding .ts extention
import { SuccessAlertComponent } from './Success-alert/Success-alert.component'
import {WarningAlertComponent} from './Warning-alert/Warning-alert.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component'
import { BasicHiglightDirective } from './highlight/BasicHighlight.Directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
// because its added by webpack which bundles our project automatically.


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent, //now Angular when it runs knows that we have a server 
    SuccessAlertComponent,
    WarningAlertComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHiglightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    HomeComponent,
    UserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
