import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FoldersModule } from './folders/folder.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 	
	HttpModule,
	FoldersModule,
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //Component that is the entry poitn of our app
})

export class AppModule { }
