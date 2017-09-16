import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component2/component3.component';
import { PropbindingComponent } from './component2/propbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    Component2Component,
    Component3Component,
    PropbindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
