import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Background } from './background.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { ControlPannelsComponent } from './control-pannels/control-pannels.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinkTestComponent } from './link-test/link-test.component';
import { Route } from '@angular/compiler/src/core';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// ng generate module app-routing --flat --module=app
// to generate the routing module


@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    Background,
    WallpaperComponent,
    ControlPannelsComponent,
    NavbarComponent,
    LinkTestComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
