import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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


@NgModule({
  declarations: [
    TeacherComponent,
    UserComponent
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
    AccountRoutingModule
  ]
})
export class UIAccountModule {
}
