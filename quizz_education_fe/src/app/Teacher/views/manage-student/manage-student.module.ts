import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from '@coreui/angular';
import { DataTablesModule } from 'angular-datatables';
import { ManageStudentRoutingModule } from './manage-student-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, ManageStudentRoutingModule, DataTablesModule, TableModule],
})
export class ManageStudentModule { }
