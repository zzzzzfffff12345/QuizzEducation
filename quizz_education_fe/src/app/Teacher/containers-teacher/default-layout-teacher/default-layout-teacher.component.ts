import { Component } from '@angular/core';
import { navTeacherItems } from './_nav_teacher';
@Component({
  selector: 'app-default-layout-teacher',
  templateUrl: './default-layout-teacher.component.html',
  styleUrls: ['./default-layout-teacher.component.scss']
})
export class DefaultLayoutTeacherComponent {

  public navTeacherItems = navTeacherItems;

  constructor() {}
}
