import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JuiFormlyLibModule } from 'jui-formly-lib';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JuiFormlyLibModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
