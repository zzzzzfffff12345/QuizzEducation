import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestKitHomeComponent } from './test-kit-home/test-kit-home.component';
import { TestKitDetailComponent } from './test-kit-detail/test-kit-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TestKitHomeComponent,
      },
      {
        path: ':id',
        component: TestKitDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestKitRoutingModule {}
