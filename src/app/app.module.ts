import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { FieldsetModule} from 'primeng/fieldset';
import {MenubarModule } from 'primeng/menubar';
import {CalendarModule} from 'primeng/calendar';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ScrollingModule,
    DialogModule,
    FieldsetModule,
    MenubarModule,
    CalendarModule

  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
