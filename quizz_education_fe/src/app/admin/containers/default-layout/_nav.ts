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
        url: '/exam/contest'
      },
      {
        name: 'Quản lý môn thi',
        url: '/exam/exam-subjects'
      },
      {
        name: 'Quản lý lớp thi',
        url: '/exam/exam-class'
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
        url: '/account/teacher'
      },
      {
        name: 'Quản lý học sinh',
        url: '/account/user'
      },
    ]
  }, {
    title: true,
    name: 'Đề thi'
  },
  {
    name: 'Quản lý đề thi',
    url: '/exam-papers-main',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Quản lý đề thi',
        url: '/exam-papers-main/exam-papers'
      },
      {
        name: 'Quản lý câu hỏi',
        url: '/exam-papers-main/exam-request'
      },
      {
        name: 'Quản lý câu trả lời',
        url: '/exam-papers-main/exam-answer'
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
    url: '/report'
  }
];
