import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgScrollbarModule } from 'ngx-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './Admin/containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ExamClassComponent } from './Admin/views/exam/exam-class/exam-class.component';
import { ExamSubjectsComponent } from './Admin/views/exam/exam-subjects/exam-subjects.component';
import { DefaultLayoutTeacherComponent } from './Teacher/containers-teacher/default-layout-teacher/default-layout-teacher.component';
import { TeacherFooterComponent } from './Teacher/containers-teacher/default-layout-teacher/teacher-footer/teacher-footer.component';
import { TeacherHeaderComponent } from './Teacher/containers-teacher/default-layout-teacher/teacher-header/teacher-header.component';
import { MainUserComponent } from './User/main-user/main-user.component';
import { AboutComponent } from './User/pages/about/about.component';
import { ContactComponent } from './User/pages/contact/contact.component';
import { HistoryComponent } from './User/pages/history/history.component';
import { HomeContentComponent } from './User/pages/home/home-content/home-content.component';
import { HomeHeaderComponent } from './User/pages/home/home-header/home-header.component';
import { HomeComponent } from './User/pages/home/home.component';
import { FooterComponent } from './User/sharepages/footer/footer.component';
import { NavbarComponent } from './User/sharepages/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
  DefaultLayoutTeacherComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    MainUserComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TeacherHeaderComponent,
    TeacherFooterComponent,
    HistoryComponent,
    HomeHeaderComponent,
    HomeContentComponent,
    ExamSubjectsComponent,
    ExamClassComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgScrollbarModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    IconSetService,
    Title,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
