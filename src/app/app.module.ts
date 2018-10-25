import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//AppMaterial module imported;
import {AppMaterialModule}  from './appmaterial.module';
// for animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MatDatepickerModule} from '@angular/material/datepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
