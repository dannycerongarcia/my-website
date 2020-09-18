import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Background } from './background.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { ControlPannelsComponent } from './control-pannels/control-pannels.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Background,
    WallpaperComponent,
    ControlPannelsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
