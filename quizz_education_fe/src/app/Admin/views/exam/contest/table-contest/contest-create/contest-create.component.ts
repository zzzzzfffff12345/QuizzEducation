import { OnDestroy, Component, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
@Component({
  selector: 'app-contest-create',
  templateUrl: './contest-create.component.html',
  styleUrls: ['./contest-create.component.scss']
})
export class ContestCreateComponent {
  constructor(private renderer: Renderer2, private http: HttpClient) { }

  name: string = '';
  formattedStartTime: string = '';
  formattedEndTime: string = '';
  errorMessage: string | null = null;

  onSubmitCreate() {
    const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
    if(this.name == "" ){
      this.errorMessage = 'Không được để trống tên kì thi';
      return
    }
    if(this.formattedEndTime == "" || this.formattedEndTime == ""){
      this.errorMessage = 'Không được để trống thời gian';
      return
    }
    if (!dateTimeRegex.test(this.formattedStartTime) || !dateTimeRegex.test(this.formattedEndTime)) {
      this.errorMessage = 'Ngày giờ không hợp lệ';
      return;
    }
    const startTime = new Date(this.formattedStartTime).getTime(); 
    const endTime = new Date(this.formattedEndTime).getTime();
  
    if (startTime >= endTime) {
      this.errorMessage = 'Ngày bắt đầu phải nhỏ hơn ngày kết thúc';
      return;
    }
    this.errorMessage = null;

     // Định dạng lại thời gian sử dụng moment
     const formattedStartTime = moment(this.formattedStartTime).format("YYYY-MM-DD HH:mm:ss.S");
     const formattedEndTime = moment(this.formattedEndTime).format("YYYY-MM-DD HH:mm:ss.S");
 
     const data = {
       tenKyThi: this.name,
       thoiGianBatDau: formattedStartTime, // Sử dụng thời gian đã định dạng
       thoiGianKetThuc: formattedEndTime, // Sử dụng thời gian đã định dạng
       daDienRa: true,
       taiKhoan: {
         tenDangNhap: "AoNhatDuy",
       },
     };

     const apiUrl = `http://localhost:8080/quizzeducation/api/kythi`;
     this.http.post(apiUrl, data)
       .subscribe((response: any) => {
         console.log('Dữ liệu đã được gửi thành công:', response);
         window.location.reload();
       }, (error: any) => {
         console.error('Lỗi khi gửi dữ liệu:', error);
       });
   

  }
  onSubmitNew() {
    this.name = '';
    this.formattedStartTime = '';
    this.formattedEndTime = ''; 
    this.errorMessage = null;
  }
  
}
