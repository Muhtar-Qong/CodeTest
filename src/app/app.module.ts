import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeRoomComponent } from './code-room/code-room.component';
import { CodeResultComponent } from './code-result/code-result.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeRoomComponent,
    CodeResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
