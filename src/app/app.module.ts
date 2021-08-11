import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateHtmlComponent } from './create-html/create-html.component';
import { CreateFormComponent } from './create-html/create-form/create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateHtmlComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
