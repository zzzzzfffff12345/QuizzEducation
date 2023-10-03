import { OnDestroy, Component, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpSvService } from '../../../../../service/API.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
@Component({
  selector: 'app-table-contest',
  templateUrl: './table-contest.component.html',
  styleUrls: ['./table-contest.component.scss']
})
export class TableContestComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2, private httpService: HttpSvService, private http: HttpClient) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dataTable: any[] | undefined; // Khai báo biến dataTable

  ngOnInit(): void {
    this.getData();
    // this.dtOptions = {
    //   ajax: {
    //     url: 'http://localhost:8080/quizzeducation/api/kythi',
    //     type: 'GET',
    //     dataType: 'json',
    //     dataSrc: '',
    //   },
    //   columns: [{
    //     title: 'Mã kỳ thi',
    //     data: 'maKyThi'
    //   }, {
    //     title: 'Tên kỳ thi',
    //     data: 'tenKyThi'
    //   }, {
    //     title: 'Trạng thái',
    //     data: 'thoiGianBatDau',
    //     render: function (data, type, full) {
    //       const now = new Date();
    //       const startTime = new Date(data);
    //       const endTime = new Date(full.thoiGianKetThuc);
    //       if (now >= startTime && now <= endTime) {
    //         return '<span class="text-primary">Đang thi</span>';
    //       } else if (now >= endTime) {
    //         return '<span class="text-success">Đã thi</span>';
    //       } else {
    //         return '<span class="text-danger">Chưa thi</span>';
    //       }

    //     }

    //   },
    //   {
    //     title: 'Thời gian bất đầu',
    //     data: 'thoiGianBatDau',
    //     render: function (data, type, full) {
    //       return moment(data).format('DD/MM/YYYY HH:mm:ss');
    //     }
    //   }, {
    //     title: 'Thời gian kết thúc',
    //     data: 'thoiGianKetThuc',
    //     render: function (data, type, full) {
    //       return moment(data).format('DD/MM/YYYY HH:mm:ss');
    //     }
    //   },
    //   {
    //     title: 'Actions',
    //     orderable: false,
    //     render: function (data, type, full) {
    //       const id = full.maKyThi;
    //       const name = full.tenKyThi;

    //       return `<div class="d-flex">
    //         <a class="btn btn-primary btn-sm view-button m-xl-1" data-id="${id}" data-name="${name}"  data-bs-toggle="modal" data-bs-target="#exampleModal">Sửa</a>
    //         </div>
    //       `;
    //     }
    //   }
    //   ]

    // };


    this.renderer.listen('document', 'click', (event) => {
      if (event.target.classList.contains('view-button')) {
        const id = event.target.getAttribute('data-id');
        const name = event.target.getAttribute('data-name');

        this.openModalWithId(Number(id), String(name));
      }
    });



  }

  id: number | undefined;
  name: string = '';
  public dskythi: any = {};
  contestStatus: string = '';
  formattedStartTime: string = '';
  formattedEndTime: string = '';
  openModalWithId(id: number, name: string) {
    this.name = name;
    this.id = id;
    // const apiUrl = `http://localhost:8080/quizzeducation/api/chitietkythi/kythi/${id}`;
    const apiUrl = `http://localhost:8080/quizzeducation/api/kythi/${id}`;

    this.http.get(apiUrl).subscribe((response: any) => {

      this.dskythi = response;
      this.formattedStartTime = this.formatDateTime(this.dskythi.thoiGianBatDau);
      this.formattedEndTime = this.formatDateTime(this.dskythi.thoiGianKetThuc);

      const now = new Date();
      const startTime = new Date(this.dskythi.thoiGianBatDau);
      const endTime = new Date(this.dskythi.thoiGianKetThuc);

      if (now >= startTime && now <= endTime) {
        this.contestStatus = 'Đang thi';

      } else if (now >= endTime) {
        this.contestStatus = 'Đã thi';
      } else {
        this.contestStatus = 'Chưa thi';
      }
    });
  }

  formatDateTime(dateTime: string): string {
    const currentDate = new Date(dateTime);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }

  //Lấy dử liệu về để cập nhật

  onSubmit() {
    // Định dạng lại thời gian sử dụng moment
    const formattedStartTime = moment(this.formattedStartTime).format("YYYY-MM-DD HH:mm:ss.S");
    const formattedEndTime = moment(this.formattedEndTime).format("YYYY-MM-DD HH:mm:ss.S");

    const data = {
      maKyThi: this.id,
      tenKyThi: this.name,
      thoiGianBatDau: formattedStartTime, // Sử dụng thời gian đã định dạng
      thoiGianKetThuc: formattedEndTime, // Sử dụng thời gian đã định dạng
      daDienRa: true,
      taiKhoan: {
        tenDangNhap: "AoNhatDuy",
      },
    };

    const id = this.dskythi.maKyThi; // Lấy id từ dữ liệu hiện tại

    const apiUrl = `http://localhost:8080/quizzeducation/api/kythi/${id}`;
    this.http.put(apiUrl, data)
      .subscribe((response: any) => {
        console.log('Dữ liệu đã được gửi thành công:', response);
        window.location.reload();
      }, (error: any) => {
        console.error('Lỗi khi gửi dữ liệu:', error);
      });
  }
  // public updateStaff() {
  //   const data = {
  //     tenKyThi: this.name,
  //     thoiGianBatDau: this.formattedStartTime,
  //     thoiGianKetThuc: this.formattedEndTime,
  //     daDienRa: true,
  //     taiKhoan: {
  //       tenDangNhap: "AoNhatDuy",
  //     },
  //   };

  //   const id = this.dskythi.maKyThi; // Lấy id từ dữ liệu hiện tại

  //   // Gọi hàm putItem để cập nhật thông tin nhân viên
  //   this.httpService.putItem('kyThi', id, data)
  //     .subscribe(
  //       (response) => {
  //         // Xử lý khi cập nhật thành công
  //         console.log("Cập nhật nhân viên thành công: ", response);
  //       },
  //       (error) => {
  //         // Xử lý lỗi nếu có
  //         console.error("Lỗi khi cập nhật nhân viên:", error);
  //       }
  //     );
  // }



  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }



  // test
  listContest: any;

  public getData() {
    this.httpService.getList('kythi').subscribe(response => {
      this.listContest = response;
      console.log(this.listContest);

    })
  }
}
