import { OnDestroy, Component, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
@Component({
  selector: 'app-contest-detail',
  templateUrl: './contest-detail.component.html',
  styleUrls: ['./contest-detail.component.scss']
})
export class ContestDetailComponent implements OnInit {
  constructor(private renderer: Renderer2, private http: HttpClient) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dataTable: any[] | undefined; // Khai báo biến dataTable

  ngOnInit(): void {

    this.dtOptions = {
      ajax: {
        url: 'http://localhost:8080/quizzeducation/api/chitietkythi',
        type: 'GET',
        dataType: 'json',
        dataSrc: '',
      },
      columns: [{
        title: 'Mã chi tiết kì thi',
        data: 'maChiTietKyThi'
      },
      {
        title: 'Thời gian bất đầu',
        data: 'thoiGianBatDau',
        render: function (data, type, full) {
          return moment(data).format('DD/MM/YYYY HH:mm:ss');
        }
      }, {
        title: 'Thời gian kết thúc',
        data: 'thoiGianKetThuc',
        render: function (data, type, full) {
          return moment(data).format('DD/MM/YYYY HH:mm:ss');
        }
      },
      {
        title: 'Actions',
        orderable: false,
        render: function (data, type, full) {
          const id = full.maKyThi;
          const name = full.tenKyThi;

          return `<div class="d-flex">
            <a class="btn btn-primary btn-sm view-button m-xl-1" data-id="${id}" data-name="${name}"  data-bs-toggle="modal" data-bs-target="#exampleModal">Sửa</a>
            </div>
          `;
        }
      }
      ]

    };


    this.renderer.listen('document', 'click', (event) => {
      if (event.target.classList.contains('view-button')) {
        const id = event.target.getAttribute('data-id');
        const name = event.target.getAttribute('data-name');

      }
    });


  }
}
