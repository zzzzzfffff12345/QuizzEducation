import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";

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

import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { FormsRoutingModule } from './exam-routing.module';
import { ExamSubjectsComponent } from './exam-subjects/exam-subjects.component';
import { TableContestComponent } from './contest/table-contest/table-contest.component';

import { ContestComponent } from './contest/contest.component';


@NgModule({
  declarations: [
    TableContestComponent,
    ExamSubjectsComponent,
    ContestComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    DocsComponentsModule,
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
    ListGroupModule, DataTablesModule
  ]
})
export class CoreUIExamModule {
}
