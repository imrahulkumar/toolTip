import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AwesomeTooltipComponent } from './tooltip/tooltip.component';
import { AwesomeTooltipDirective } from './tooltip/tooltip.directive';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { OverlayModule } from "@angular/cdk/overlay";
@NgModule({
  declarations: [
    AppComponent,
    AwesomeTooltipComponent,
    AwesomeTooltipDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule
    
  ],
  entryComponents: [AwesomeTooltipComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
