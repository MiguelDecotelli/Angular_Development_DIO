import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PrimaryTitleComponent } from './components/primary-title/primary-title.component';
import { SecondaryTitleComponent } from './components/secondary-title/secondary-title.component';
import { PrimaryCardComponent } from './components/primary-card/primary-card.component';
import { SecondaryCardComponent } from './components/secondary-card/secondary-card.component';
import { TertiaryCardComponent } from './components/tertiary-card/tertiary-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PrimaryTitleComponent,
    SecondaryTitleComponent,
    PrimaryCardComponent,
    SecondaryCardComponent,
    TertiaryCardComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
