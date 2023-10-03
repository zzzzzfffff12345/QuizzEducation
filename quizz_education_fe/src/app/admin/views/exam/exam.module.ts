import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from '@angular/common/http';

import {
  ButtonGroupModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule
} from '@coreui/angular';

import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsRoutingModule } from './exam-routing.module';
import { ExamSubjectsComponent } from './exam-subjects/exam-subjects.component';
import { TableContestComponent } from './contest/table-contest/table-contest.component';

import { ContestComponent } from './contest/contest.component';
import { ContestCreateComponent } from './contest/table-contest/contest-create/contest-create.component';
import { ContestDetailComponent } from './contest/table-contest/contest-detail/contest-detail.component';
import { TableContestNGComponent } from './contest/table-contest/table-contest-ng/table-contest-ng.component';

import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    TableContestComponent,
    ExamSubjectsComponent,
    ContestComponent,
    ContestCreateComponent,
    ContestDetailComponent,
    TableContestNGComponent,
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
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule, DataTablesModule,
    HttpClientModule,
    TableModule,
    PaginatorModule
  ]
})
export class CoreUIExamModule {
}
