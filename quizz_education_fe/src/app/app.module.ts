import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import { DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent } from './Admin/containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
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
  UtilitiesModule
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { MainUserComponent } from './User/main-user/main-user.component';
import { NavbarComponent } from './User/sharepages/navbar/navbar.component';
import { FooterComponent } from './User/sharepages/footer/footer.component';
import { HomeComponent } from './User/pages/home/home.component';
import { ExamComponent } from './User/pages/exam/exam.component';
import { ScoreComponent } from './User/pages/score/score.component';
import { DefaultLayoutTeacherComponent } from './Teacher/containers-teacher/default-layout-teacher/default-layout-teacher.component';
import { TeacherHeaderComponent } from './Teacher/containers-teacher/default-layout-teacher/teacher-header/teacher-header.component';
import { TeacherFooterComponent } from './Teacher/containers-teacher/default-layout-teacher/teacher-footer/teacher-footer.component';
import { HistoryComponent } from './User/pages/history/history.component';
import { HomeHeaderComponent } from './User/pages/home/home-header/home-header.component';
import { HomeContentComponent } from './User/pages/home/home-content/home-content.component';
import { ReportComponent } from './Admin/views/report/report.component';
import { HttpClientModule } from '@angular/common/http';

import { TeacherComponent } from './Admin/views/account/teacher/teacher.component';
import { UserComponent } from './Admin/views/account/user/user.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HttpSvService } from './service/API.service';
const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
  DefaultLayoutTeacherComponent
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, MainUserComponent, NavbarComponent, FooterComponent, HomeComponent, ExamComponent, ScoreComponent, TeacherHeaderComponent, TeacherFooterComponent, HistoryComponent, HomeHeaderComponent, HomeContentComponent, ReportComponent],
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
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      // provide: PathLocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
