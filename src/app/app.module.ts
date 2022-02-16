import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/Server.component';
import { ServersComponent } from './servers/servers.component' // here we are not adding .ts extention
// because its added by webpack which bundles our project automatically.

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent //now Angular when it runs knows that we have a server 
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
