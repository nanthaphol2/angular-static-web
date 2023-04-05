import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppConfigModule } from './appconfig.module';

import { AppConfigService } from './appconfig.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppConfigModule
  ],
  providers: [
    AppConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
