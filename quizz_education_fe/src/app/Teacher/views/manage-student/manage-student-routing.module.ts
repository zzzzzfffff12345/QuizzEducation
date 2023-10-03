import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageStudentHomeComponent } from './manage-student-event/manage-student-event.component';
import { ManageStudentListComponent } from './manage-student-subject-list/manage-student-subject-list.component';
import { ManageStudentClassListComponent } from './manage-student-class-list/manage-student-class-list.component';
import { ManageStudentPupilsListComponent } from './manage-student-pupils-list/manage-student-pupils-list.component';

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
        component: ManageStudentListComponent,
      },
      {
        path: 'event/:id/subject/:id2/class',
        component: ManageStudentClassListComponent
      },
      {
        path: 'event/:id/subject/:id2/class/:id3/student',
        component: ManageStudentPupilsListComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageStudentRoutingModule { }
