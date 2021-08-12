import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateHtmlComponent } from './create-html/create-html.component';
import { CreateFormComponent } from './create-html/create-form/create-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app-modules/material.module';
import { PreviewComponent } from './create-html/preview/preview.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CropperComponent } from './shared/components/cropper/cropper.component';
import { ImgPreviewComponent } from './shared/components/img-preview/img-preview.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    CreateHtmlComponent,
    CreateFormComponent,
    PreviewComponent,
    CropperComponent,
    ImgPreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ImageCropperModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
