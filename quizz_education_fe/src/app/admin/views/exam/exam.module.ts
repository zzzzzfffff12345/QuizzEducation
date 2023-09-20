import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
} from '@coreui/angular';

// import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { ContestComponent } from './contest/contest.component';
import { ExamRoutingModule } from './exam-routing.module';

@NgModule({
  declarations: [
    ContestComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExamRoutingModule

  ]
})
export class CoreUIExamModule {
}
