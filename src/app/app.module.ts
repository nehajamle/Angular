import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDataComponent } from './add-data/add-data.component';
import { DisplayDataComponent } from './display-data/display-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    DisplayDataComponent
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
