import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JuiFormlyLibModule } from 'jui-formly-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JuiFormlyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
