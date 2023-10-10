import { OnDestroy, Component, OnInit, Renderer2 } from '@angular/core';
import { HttpSvService } from '../../../../../service/API.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-exam-class-create',
  templateUrl: './exam-class-create.component.html',
  styleUrls: ['./exam-class-create.component.scss']
})
export class ExamClassCreateComponent {

  constructor(private messageService: MessageService, private httpService: HttpSvService) { }// Khai báo các biến
  tenLopThi: string = '';
  soLuongHocSinh: number = 0;
  messageCreate: string = '';

  // Hàm tạo lớp thi
  createLopThi() {
    // Kiểm tra điều kiện trước khi tạo
    if (this.tenLopThi.trim() === '') {
      this.messageCreate = 'Không được bỏ trống tên lớp thi';
      this.showCreateError();
      return;
    }

    if (this.soLuongHocSinh <= 0) {
      this.messageCreate = 'Số lượng học sinh phải lớn hơn 0';
      this.showCreateError();
      return;
    }

    // Dữ liệu để gửi lên server
    const data = {
      tenLop: this.tenLopThi,
      soLuongToiDa: this.soLuongHocSinh
    };

    // Gửi yêu cầu tạo lớp thi
    this.httpService.postItem('lopthi', data).subscribe(
      (response) => {

        this.showCreateSuccess();
      },
      (error) => {
        console.log('Lỗi tạo mới', error);
      }
    );
  }

  // Hiển thị thông báo thành công và làm mới trang sau 2 giây
  showCreateSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Tạo mới thành công', detail: 'Tạo mới lớp thi thành công' });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  // Hiển thị thông báo lỗi tạo mới
  showCreateError() {
    this.messageService.add({ severity: 'error', summary: 'Lỗi tạo mới', detail: this.messageCreate });
  }

  // Làm mới
  clear() {
    this.tenLopThi = '';
    this.soLuongHocSinh = 0;
  }
}
