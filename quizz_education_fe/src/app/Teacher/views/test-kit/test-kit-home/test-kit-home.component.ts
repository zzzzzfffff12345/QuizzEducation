import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-kit-home',
  templateUrl: './test-kit-home.component.html',
  styleUrls: ['./test-kit-home.component.scss'],
})
export class TestKitHomeComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      columns: [
        {
          title: 'Mã kỳ thi',
          data: 'id',
        },
        {
          title: 'Tên kỳ thi',
          data: 'name',
        },
        {
          title: 'Mô tả',
          data: 'description',
        },
        {
          title: 'Thời gian bắt đầu',
          data: 'startDate',
        },
        {
          title: 'Thời gian kết thúc',
          data: 'endDate',
        },
        {
          title: 'Trạng thái',
          data: 'status',
        },
        {},
      ],
    };
  }
}
