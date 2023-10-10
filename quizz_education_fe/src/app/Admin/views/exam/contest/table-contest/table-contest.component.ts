import { OnDestroy, Component, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpSvService } from '../../../../../service/API.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-table-contest',
  templateUrl: './table-contest.component.html',
  styleUrls: ['./table-contest.component.scss']
})
export class TableContestComponent implements OnInit {
  constructor(private renderer: Renderer2, private httpService: HttpSvService, private http: HttpClient,
    private formBuilder: FormBuilder,) { }


  ngOnInit(): void {
    this.getData();
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
  messageEdit: string = '';
  onSubmit() {
    // Định dạng lại thời gian sử dụng moment
    const formattedStartTime = moment(this.formattedStartTime).format("YYYY-MM-DD HH:mm:ss.S");
    const formattedEndTime = moment(this.formattedEndTime).format("YYYY-MM-DD HH:mm:ss.S");
    const currentTime = new Date().getTime();
    const formatcurrentTime = moment(currentTime).format("YYYY-MM-DD HH:mm:ss.S");
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
    if (!this.id || !this.name || !this.formattedStartTime || !this.formattedEndTime) {
      this.messageEdit = "Vui lòng điền đầy đủ thông tin."
      return;
    }
    if (formattedStartTime >= formattedEndTime) {
      this.messageEdit = 'Thời gian bắt đầu phải trước thời gian kết thúc.';
      return;
    }
    if (formatcurrentTime >= formattedEndTime) {
      this.messageEdit = 'Thời gian hiện tại phải nhỏ hơn thời gian kết thúc.';
      return;
    }
    const apiUrl = `http://localhost:8080/quizzeducation/api/kythi/${id}`;
    this.http.put(apiUrl, data)
      .subscribe((response: any) => {
        console.log('Dữ liệu đã được gửi thành công:', response);
        window.location.reload();
      }, (error: any) => {
        console.error('Lỗi khi gửi dữ liệu:', error);
      });

  }
  public updateStaff() {
    const data = {
      tenKyThi: this.name,
      thoiGianBatDau: this.formattedStartTime,
      thoiGianKetThuc: this.formattedEndTime,
      daDienRa: true,
      taiKhoan: {
        tenDangNhap: "AoNhatDuy",
      },
    };

    const id = this.dskythi.maKyThi; // Lấy id từ dữ liệu hiện tại

    // Gọi hàm putItem để cập nhật thông tin nhân viên
    this.httpService.putItem('kyThi', id, data)
      .subscribe(
        (response) => {
          // Xử lý khi cập nhật thành công
          console.log("Cập nhật nhân viên thành công: ", response);
        },
        (error) => {
          // Xử lý lỗi nếu có
          console.error("Lỗi khi cập nhật nhân viên:", error);
        }
      );
  }




  // test
  listContest: any;
  public getValueSearch() {
    return this.formFilter.get('search')?.value;
  }
  public formFilter = this.formBuilder.group({
    setRows: new FormControl(5),
    search: new FormControl('')
  })

  public getData() {
    this.httpService.getList('kythi').subscribe(response => {
      this.listContest = response;
      
    })
  }

  getContestStatus(startTime: string, endTime: string): string {
    const currentTime = new Date().getTime();
    const startTimeMillis = new Date(startTime).getTime();
    const endTimeMillis = new Date(endTime).getTime();

    if (currentTime < startTimeMillis) {
      return 'Chưa thi';
    } else if (currentTime > endTimeMillis) {
      return 'Đã thi';
    } else {
      return 'Đang thi';
    }
  }


  id: number | undefined;
  name: string = '';
  public dskythi: any = {};
  contestStatus: string = '';
  formattedStartTime: string = '';
  formattedEndTime: string = '';
  getEditKyThi(id: number) {
    console.log(id);
    const apiUrl = `http://localhost:8080/quizzeducation/api/kythi/${id}`;
    this.id = id;
    this.http.get(apiUrl).subscribe((response: any) => {

      this.dskythi = response;
      this.formattedStartTime = this.formatDateTime(this.dskythi.thoiGianBatDau);
      this.formattedEndTime = this.formatDateTime(this.dskythi.thoiGianKetThuc);
      this.name = this.dskythi.tenKyThi;
    });
  }

  date: Date | undefined;


  // Xuất excel
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.listContest);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'Kỳ thi');
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}