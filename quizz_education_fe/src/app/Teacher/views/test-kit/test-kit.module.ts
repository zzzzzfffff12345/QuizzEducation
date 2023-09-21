import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestKitHomeComponent } from './test-kit-home/test-kit-home.component';
import { TestKitRoutingModule } from './test-kit-routing.module';
import { TestKitDetailComponent } from './test-kit-detail/test-kit-detail.component';

@NgModule({
  declarations: [TestKitHomeComponent, TestKitDetailComponent],
  imports: [CommonModule, TestKitRoutingModule, DataTablesModule],
})
export class TestKitModule {}
