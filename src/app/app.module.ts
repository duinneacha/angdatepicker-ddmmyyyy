import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { DatepickerExampleComponent } from './datepicker-example/datepicker-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerExampleComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
