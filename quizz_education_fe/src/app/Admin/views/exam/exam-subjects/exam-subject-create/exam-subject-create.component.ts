import { OnDestroy, Component, OnInit, Renderer2 } from '@angular/core';
import { HttpSvService } from '../../../../../service/API.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-exam-subject-create',
  templateUrl: './exam-subject-create.component.html',
  styleUrls: ['./exam-subject-create.component.scss']
})
export class ExamSubjectCreateComponent {
  constructor(private messageService: MessageService, private httpService: HttpSvService) { }
  // Tạo môn thi
  tenMonThi: string = '';
  thoiGianLamBai: number = 0;
  messageCreate: string = '';
  createMonThi() {
    const data = {
      tenMon: this.tenMonThi,
      thoiGianLamBai: this.thoiGianLamBai
    }
    if (this.tenMonThi == "") {
      this.messageCreate = "Không được bỏ trong tên môn thi";
      this.showCreateError();
      return
    } else if (this.thoiGianLamBai == 0) {
      this.messageCreate = "Không được bỏ trong thời gian làm bài";
      this.showCreateError();
      return
    } else if (this.thoiGianLamBai < 0) {
      this.messageCreate = "Thời gian làm bài phải lớn hơn 1";
      this.showCreateError();
      return
    }
    else {
      this.httpService.postItem('monthi', data).subscribe(
        (response) => {
          this.showCreate()
        },
        (error) => {
          console.log("Lỗi tạo mới", error);
        }
      );
    }
  }
  showCreate() {
    this.messageService.add({ severity: 'success', summary: 'Tạo mới thành công', detail: 'tạo mới môn thi thành công' });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
  showCreateError() {
    this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: this.messageCreate });
  }

  // Làm mới
  clear() {
    this.tenMonThi = '';
    this.thoiGianLamBai = 0;
  }
}
