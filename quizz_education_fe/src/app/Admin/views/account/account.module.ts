import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule
} from '@coreui/angular';

import { AccountRoutingModule } from './account-routing.module';
import { UserComponent } from './user/user.component';
import { TeacherComponent } from './teacher/teacher.component';


import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CreateUserComponent } from './user/create-user/create-user.component';

@NgModule({
  declarations: [
    TeacherComponent,
    UserComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    AccountRoutingModule,
    PaginatorModule,
    TableModule,
    InputTextModule,
    CalendarModule,
    TabViewModule,
    ToastModule,
    ConfirmDialogModule,
    PasswordModule,
    RadioButtonModule
  ]
})
export class UIAccountModule {
}
