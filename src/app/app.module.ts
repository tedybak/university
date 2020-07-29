import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { NotRegisteredComponent } from './not-registered.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, NavbarComponent, NotRegisteredComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, FormsModule, HttpClientModule],

  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
