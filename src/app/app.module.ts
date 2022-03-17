import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { FormAssignmentComponent } from './Form-Assignment/form-assignment/form-assignment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeadersComponent } from './includes/headers/headers.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomObsComponent } from './observable/custom-obs/custom-obs.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
 
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
    UserComponent,
    ShortenPipe,
    FilterPipe,
    FormAssignmentComponent,
    HeadersComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObsComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
