import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StageViewerComponent } from './stage-viewer/stage-viewer.component';
import { ObjectViewerComponent } from './object-viewer/object-viewer.component';
import { PrimitiveViewerComponent } from './primitive-viewer/primitive-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    StageViewerComponent,
    ObjectViewerComponent,
    PrimitiveViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
