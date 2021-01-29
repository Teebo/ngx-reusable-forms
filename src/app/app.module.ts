import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './forms/hero/hero.component';
import { PowersComponent } from './forms/powers/powers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PowersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
