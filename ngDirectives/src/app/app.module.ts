import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ImprovedHighlightDirective } from './shared/directives/improved-highlight/improved-highlight.directive';
import { BasicHighlightDirective } from './shared/directives/basic-highlight/basic-highlight.directive';
import { UnlessDirective } from './shared/directives/unless/unless.directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    ImprovedHighlightDirective,
    UnlessDirective
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
