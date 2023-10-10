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

import { ExamPapersMainRoutingModule } from './exam-papers-main-routing.module';
import { ExamPapersComponent } from './exam-papers/exam-papers.component';

@NgModule({
  declarations: [
    ExamPapersComponent
  ],
  imports: [
    CommonModule,
    ExamPapersMainRoutingModule,
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
    ListGroupModule
  ]
})
export class CoreUIExamPaperMainModule {
}
