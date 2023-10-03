import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestComponent } from './contest/contest.component';
import { ExamClassComponent } from './exam-class/exam-class.component';
import { ExamSubjectsComponent } from './exam-subjects/exam-subjects.component';
import { TableContestNGComponent} from '../exam/contest/table-contest/table-contest-ng/table-contest-ng.component';


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
        redirectTo: 'exam-subjects'
      },
      {
        path: 'exam-subjects',
        component: ExamSubjectsComponent,
        data: {
          title: 'Exam Subjects'
        }
      },

      {
        path: 'contest',
        component: ContestComponent,
        data: {
          title: 'Contest'
        }
      }, {
        path: 'exam-class',
        component: ExamClassComponent,
        data: {
          title: 'Exam Class'
        }
      },
      {
        path: 'TableontestNG',
        component: TableContestNGComponent,
        data: {
          title: 'table-contest'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
