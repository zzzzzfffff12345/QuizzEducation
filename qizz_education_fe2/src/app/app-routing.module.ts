
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './User/pages/home/home.component';
import { AboutComponent } from './User/pages/about/about.component';
import { MainUsersComponent } from './User/main-users/main-users.component';
import { MainAminComponent } from './Admin/main-amin/main-amin.component';
import { HomeAdminComponent } from './Admin/pages/home-admin/home-admin.component';
import { AboutAdminComponent } from './Admin/pages/about-admin/about-admin.component';
import { ContactComponent } from './User/pages/contact/contact.component';
import { HomeTeacherComponent } from './Teacher/pages/home-teacher/home-teacher.component';
import { MainTeacherComponent } from './Teacher/main-teacher/main-teacher.component';

const routes: Routes = [

  {
    path: 'user',
    component: MainUsersComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },
  {
    path: 'teacher',
    component: MainTeacherComponent,
    children: [
      { path: 'home', component: HomeTeacherComponent }
    ]
  },
  {
    path: 'admin',
    component: MainAminComponent,
    children: [
      { path: 'home', component: HomeAdminComponent },
      { path: 'about', component: AboutAdminComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
