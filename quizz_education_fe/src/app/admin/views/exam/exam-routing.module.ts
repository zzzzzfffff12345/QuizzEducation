import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormControlsComponent } from './form-controls/form-controls.component';

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
        component: FormControlsComponent,
        data: {
          title: 'Exam Subjects'
        }
      },
      {
        path: 'contest',
        component: FormControlsComponent,
        data: {
          title: 'Contest'
        }
      },{
        path: 'exam-class',
        component: FormControlsComponent,
        data: {
          title: 'Exam Class'
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
