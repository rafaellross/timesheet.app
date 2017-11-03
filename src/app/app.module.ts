import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
import { AdminComponent } from './components/admin/admin.component';
import { AuthenticationService } from './services/authentication.service';
import { NavbarComponent } from './components/navbar/navbar.component';


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
    AdminComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [AuthenticationService, DataService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
