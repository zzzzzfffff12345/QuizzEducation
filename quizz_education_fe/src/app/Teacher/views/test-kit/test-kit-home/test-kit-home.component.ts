import { BasicService } from './../../../../services/basic.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { KyThi } from './../../../../models/KyThi.entity';
import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-test-kit-home',
  templateUrl: './test-kit-home.component.html',
  styleUrls: ['./test-kit-home.component.scss'],
})
export class TestKitHomeComponent implements OnInit, OnDestroy, AfterViewInit {
  public listKyThi: KyThi[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit(): void {
    this.dtOptions = {
      ajax: {
        url: 'http://localhost:8080/quizzeducation/api/kythi',
        type: 'GET',
        dataSrc: '',
        dataType: 'json',
      },
      columns: [
        {
          title: 'Mã kỳ thi',
          data: 'maKyThi',
        },
        {
          title: 'Tên kỳ thi',
          data: 'tenKyThi',
        },
        {
          title: 'Mô tả',
          data: 'moTa',
        },
        {
          title: 'Thời gian bắt đầu',
          data: 'thoiGianBatDau',
        },
        {
          title: 'Thời gian kết thúc',
          data: 'thoiGianKetThuc',
        },
        {
          title: 'Trạng thái',
          data: 'daDienRa',
        },
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-primary" route="'+full.maKyThi+'">Chi tiết</button>';
          },
        },
      ],
    };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.hasAttribute('route')) {
        this.router.navigate([
          '/teacher/test-kit/' + event.target.getAttribute('route'),
        ]);
      }
    });
  }
}
