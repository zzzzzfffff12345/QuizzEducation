import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContestComponent  } from './contest/contest.component';

const routes: Routes = [
<<<<<<< Updated upstream
    {
      path: '',
      data: {
        title: 'Kỳ thi'
=======
  {
    path: '',
    data: {
      title: 'Exam'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'exam-subjects'
>>>>>>> Stashed changes
      },
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'contest'
        },
        {
          path: 'contest',
          component: ContestComponent,
          data: {
            title: 'Contest'
          }
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ExamRoutingModule {
  }
  