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
import {CdkTableModule} from '@angular/cdk/table';
import {
  MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatFormFieldModule,
  MatInputModule, MatGridListModule, MatSidenavModule, MatListModule, MatCardModule,MatTabsModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatExpansionModule,
  MatSnackBar, MatSnackBarModule, MatTableModule


} from '@angular/material';
import { DialogComponent } from './components/dialog/dialog.component';
import { TestComponent } from './components/test/test.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ViewComponent } from './components/users/view/view.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
@NgModule({
  exports: [
    CdkTableModule],
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
    RegisterComponent,
    ViewComponent,
    UserEditComponent,
    
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
    MatExpansionModule, MatSnackBarModule,MatTableModule
  ],
  providers: [AuthenticationService, DataService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
