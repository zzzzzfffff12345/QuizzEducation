import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './Admin/containers';
import { Page404Component } from './Admin/views/pages/page404/page404.component';
import { Page500Component } from './Admin/views/pages/page500/page500.component';
import { LoginComponent } from './Admin/views/pages/login/login.component';
import { RegisterComponent } from './Admin/views/pages/register/register.component';
import { MainUserComponent } from './User/main-user/main-user.component';
import { AboutComponent } from './User/pages/about/about.component';
import { HomeComponent } from './User/pages/home/home.component';
import { ScoreComponent } from './User/pages/score/score.component';
import { DefaultLayoutTeacherComponent } from './Teacher/containers-teacher/index-teacher';
import { HistoryComponent } from './User/pages/history/history.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/user/home',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: MainUserComponent,
    children: [
      { path: 'exam', component: AboutComponent },
      { path: 'home', component: HomeComponent },
      { path: 'score', component: ScoreComponent },
      { path: 'history', component: HistoryComponent }
    ]
  }
  ,
  {
    path: 'admin',
    component: DefaultLayoutComponent,
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: 'exam',
        loadChildren: () =>
          import('./Admin/views/exam/exam.module').then((m) => m.CoreUIExamModule)
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./Admin/views/account/account.module').then((m) => m.UIAccountModule)
      },
      {
        path: 'exam-papers-main',
        loadChildren: () =>
          import('./Admin/views/exam-papers-main/exam-papers-main.module').then((m) => m.CoreUIExamPaperMainModule)
      },
      {
        path: 'report',
        loadChildren: () =>
          import('./Admin/views/report/report.module').then((m) => m.CoreUIReportModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./Admin/views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: 'teacher',
    component: DefaultLayoutTeacherComponent,
    children: [

      {
        path: 'forms',
        loadChildren: () =>
          import('./Teacher/views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },

      {
        path: 'pages',
        loadChildren: () =>
          import('./Teacher/views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'changepassword',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  // { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
