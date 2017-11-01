import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SelectComponent } from './components/select/select.component';
import { NewComponent } from './components/new/new.component';
import { ManageComponent } from './components/manage/manage.component';
import { EditComponent } from './components/edit/edit.component';
import { RoutingModule } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { ConvertToHourPipe } from './pipes/convert-to-hour.pipe';
import { GetTotalHoursPipe } from './pipes/get-total-hours.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectComponent,
    NewComponent,
    ManageComponent,
    EditComponent,
    HomeComponent,
    ConvertToHourPipe,
    GetTotalHoursPipe,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
