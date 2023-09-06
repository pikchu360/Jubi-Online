import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Libraries
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

//Angular Material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    MatGridListModule,
    MatListModule
  ],
  exports: [
    CommonModule,
    CalendarModule,
    ReactiveFormsModule,
    CalendarModule,
    MatGridListModule,
    MatListModule
  ],
})
export class SharedModule { }
