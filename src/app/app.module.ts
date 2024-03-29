import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from '@component/admin/admin.module';
import { ConfirmationService, MessageService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from '@component/user/user.module';
import { LoginComponent } from '@page/login/login.component';
import { SignupComponent } from '@page/signup/signup.component';
import { PrimengModule } from './primeng.module';
import { ActivityModule } from '@page/activity/activity.module';
import { ViewActivityModule } from '@page/view-activity/view-activity.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    HttpClientModule,
    UserModule,
    AdminModule,
    ActivityModule,
    ViewActivityModule,
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
