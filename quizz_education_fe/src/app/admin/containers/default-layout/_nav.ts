import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [


  {
    title: true,
    name: 'Kỳ Thi'
  },
  {
    name: 'Quản lý kỳ thi',
    url: '/exam',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Quản lý đợt thi',
        url: '/admin/contest'
      },
      {
        name: 'Quản lý môn thi',
        url: '/admin/exam-subjects'
      },
      {
        name: 'Quản lý lớp thi',
        url: '/admin/exam-class'
      }
    ]
  },
  {
    title: true,
    name: 'Người dùng'
  },
  {
    name: 'Quản lý người dùng',
    url: '/account',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Quản lý giáo viên',
        url: '/admin/teacher'
      },
      {
        name: 'Quản lý học sinh',
        url: '/admin/user'
      },
    ]
  }, {
    title: true,
    name: 'Đề thi'
  },
  {
    name: 'Quản lý đề thi',
    url: '/exam-papers',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Quản lý câu hỏi',
        url: '/admin/exam-request'
      },
      {
        name: 'Quản lý câu trả lời',
        url: '/admin/exam-answer'
      },
    ]
  },
  {
    title: true,
    name: 'Thống kê'
  },
  {
    name: 'Thống kê',
    iconComponent: { name: 'cil-description' },
    class: 'mt-auto',
    url: '/admin/report'
  },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'https://coreui.io/product/angular-dashboard-template/',
  //   iconComponent: { name: 'cil-layers' },
  //   attributes: { target: '_blank' }
  // }
];
