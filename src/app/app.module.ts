import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyMaterialModule } from  './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardComponentDialog } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DashboardComponentDialog,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    RouterModule.forRoot([
      { 
        path: '', redirectTo: 'login', pathMatch: 'full' 
      },
      { 
        path: 'dashboard', component: DashboardComponent 
      },
      { 
        path: 'login', component: LoginComponent 
      },
      { 
        path: 'logout', component: LogoutComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DashboardComponentDialog
  ],
})
export class AppModule { }
