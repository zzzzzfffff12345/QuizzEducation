import { INavData } from '@coreui/angular';

export const navTeacherItems: INavData[] = [


  {
    name: 'Forms',
    url: '/teacher/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/teacher/forms/form-control'
      },
      {
        name: 'Select',
        url: '/teacher/forms/select'
      },
      {
        name: 'Checks & Radios',
        url: '/teacher/forms/checks-radios'
      },
      {
        name: 'Range',
        url: '/teacher/forms/range'
      },
      {
        name: 'Input Group',
        url: '/teacher/forms/input-group'
      },
      {
        name: 'Floating Labels',
        url: '/teacher/forms/floating-labels'
      },
      {
        name: 'Layout',
        url: '/teacher/forms/layout'
      },
      {
        name: 'Validation',
        url: '/teacher/forms/validation'
      }
    ]
  },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
  //   ]
  // },
  // {
  //   title: true,
  //   name: 'Links',
  //   class: 'py-0'
  // },
  // {
  //   name: 'Docs',
  //   url: 'https://coreui.io/angular/docs/templates/installation',
  //   iconComponent: { name: 'cil-description' },
  //   attributes: { target: '_blank', class: '-text-dark' },
  //   class: 'mt-auto'
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'https://coreui.io/product/angular-dashboard-template/',
  //   iconComponent: { name: 'cil-layers' },
  //   attributes: { target: '_blank' }
  // }
];
