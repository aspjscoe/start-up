import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { SubComponent } from './subheader/subheader.component';

import { MenusComponent } from './menus/menus.component';
import { TopComponent } from './topmenu/topmenu.component';

import { IfComponent } from './if-example/if-example.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,SubComponent,MenusComponent,TopComponent,IfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
