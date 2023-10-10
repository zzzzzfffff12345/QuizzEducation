import { ManageStudentPupilComponent } from './manage-student-pupil/manage-student-pupil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageStudentClassComponent } from './manage-student-class/manage-student-class.component';
import { ManageStudentHomeComponent } from './manage-student-event/manage-student-event.component';
import { ManageStudentSubjectComponent } from './manage-student-subject/manage-student-subject.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'event',
      },
      {
        path: 'event',
        component: ManageStudentHomeComponent,
      },
      {
        path: 'event/:id/subject',
        component: ManageStudentSubjectComponent,
      },
      {
        path: 'event/:id/subject/:id2/class',
        component: ManageStudentClassComponent
      },
      {
        path: 'event/:id/subject/:id2/class/:id3/student',
        component: ManageStudentPupilComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageStudentRoutingModule { }
