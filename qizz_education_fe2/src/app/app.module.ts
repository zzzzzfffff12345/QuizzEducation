import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './User/sharepages/navbar/navbar.component';
import { FooterComponent } from './User/sharepages/footer/footer.component';
import { HomeComponent } from './User/pages/home/home.component';
import { AboutComponent } from './User/pages/about/about.component';
import { HomeAdminComponent } from './Admin/pages/home-admin/home-admin.component';
import { MainAminComponent } from './Admin/main-amin/main-amin.component';
import { MainUsersComponent } from './User/main-users/main-users.component';
import { NavAdminComponent } from './Admin/sharepages/nav-admin/nav-admin.component';
import { MainTeacherComponent } from './Teacher/main-teacher/main-teacher.component';
import { AboutAdminComponent } from './Admin/pages/about-admin/about-admin.component';
import { ContactComponent } from './User/pages/contact/contact.component';
import { NavbarTeacherComponent } from './Teacher/sharepages/navbar-teacher/navbar-teacher.component';
import { FooterTeacherComponent } from './Teacher/sharepages/footer-teacher/footer-teacher.component';
import { HomeTeacherComponent } from './Teacher/pages/home-teacher/home-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HomeAdminComponent,
    MainAminComponent,
    MainUsersComponent,
    NavAdminComponent,
    MainTeacherComponent,
    AboutAdminComponent,
    ContactComponent,
    NavbarTeacherComponent,
    FooterTeacherComponent,
    HomeTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
