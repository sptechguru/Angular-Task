import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CrudComponent } from './components/crud/crud.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfessionalsComponent } from './components/professionals/professionals.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {DatePipe} from '@angular/common';
import { NumericFormatterPipe } from './service/pipes/numeric-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    ProfessionalsComponent,
    NumericFormatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
