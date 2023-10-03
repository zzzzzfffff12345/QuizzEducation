import { ManageStudentRoutingModule } from './manage-student-routing.module';
import { ManageStudentHomeComponent } from './manage-student-event/manage-student-event.component';
import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageStudentListComponent } from './manage-student-subject-list/manage-student-subject-list.component';
import { ManageStudentClassListComponent } from './manage-student-class-list/manage-student-class-list.component';
import { ManageStudentPupilsListComponent } from './manage-student-pupils-list/manage-student-pupils-list.component';

@NgModule({
  declarations: [ManageStudentHomeComponent, ManageStudentListComponent, ManageStudentClassListComponent, ManageStudentPupilsListComponent],
  imports: [CommonModule, ManageStudentRoutingModule, DataTablesModule],
})
export class ManageStudentModule {}
