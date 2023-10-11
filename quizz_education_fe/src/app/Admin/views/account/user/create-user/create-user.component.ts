import { Component, OnInit } from '@angular/core';
import { accountStudent } from './../../../../../classes/Admin/account/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  tenDangNhap!: accountStudent[];
  gioiTinh!: accountStudent[];
  matKhau!: accountStudent[];
  tenHocSinh!: accountStudent[];
  diaChi!: accountStudent[];
  soDienThoai!: accountStudent[];
  namSinh!: accountStudent[];
  email: string = '';

  emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Tạo tài khoản học sinh
  createUer() {


  }

  form: FormGroup;
  submitted = false; // Thêm biến này để kiểm tra việc gửi form

  ngOnInit(): void {
    this.form = new FormGroup({
      tenDangNhap: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^[a-zA-Z0-9]*$/), // Bắt buộc chỉ chứa chữ và số
      ]),
      // Khai báo các trường dữ liệu khác ở đây
    });
  }

  createUser() {
    this.submitted = true; // Đánh dấu rằng form đã được gửi
    if (this.form.valid) {
      // Thực hiện hành động tạo tài khoản ở đây
    }
  }
}
