import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamClassComponent } from '../exam/exam-class/exam-class.component';
import { ReportComponent } from './report.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Kì thi'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'report'
      },
      {
        path: 'report',
        component: ReportComponent,
        data: {
          title: 'Report'
        }
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule {
}
