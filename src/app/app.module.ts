import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
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
import {
  MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatFormFieldModule,
  MatInputModule, MatGridListModule, MatSidenavModule, MatListModule, MatCardModule,MatTabsModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatExpansionModule,
  MatDatepickerModule


} from '@angular/material';
import { DialogComponent } from './components/dialog/dialog.component';
import { TestComponent } from './components/test/test.component';
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
    DialogComponent,
    TestComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    FormsModule,
    HttpModule,
    MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSidenavModule, MatListModule, MatCardModule, MatTabsModule, MatSlideToggleModule, MatSelectModule,
    MatExpansionModule, MatDatepickerModule
  ],
  providers: [AuthenticationService, DataService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
