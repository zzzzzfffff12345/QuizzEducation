import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user: any;
  defaultImage: string = 'https://firebasestorage.googleapis.com/v0/b/quizzeducation-eaea3.appspot.com/o/user.jfif?alt=media&token=ab5d4676-8da1-49dd-b934-776119b9f867';
  private userKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5EYW5nTmhhcCI6IkNoYXVNYW5oVGFuIiwibWF0S2hhdSI6IjEyMyIsInRyYW5nVGhhaSI6dHJ1ZSwiZW1haWwiOiJDaGF1TWFuaFRhbkBnbWFpbC5jb20iLCJjYW5DdW9jQ29uZ0RhbiI6IjIzMTg4ODQ0NDU1NSIsImhvVmFUZW4iOiJDaMOidSBN4bqhbmggVOG6pW4iLCJnaW9pVGluaCI6dHJ1ZSwibmdheVNpbmgiOiIyMDAxLTAyLTE2IiwiZGlhQ2hpIjoiQ-G6p24gVGjGoSIsInNvRGllblRob2FpIjoiOTE3Nzc3Nzc3ICIsIm5nYXlUYW9UYWlLaG9hbiI6IjIwMjMtMDktMzAiLCJhbmhEYWlEaWVuIjoiIiwibG9wVGhpIjpudWxsLCJ2YWlUcm8iOnsibWFWYWlUcm8iOjEsInRlblZhaVRybyI6Ikjhu41jIHNpbmgifX0.ZNqYr9Se-wehf14jrI3XOzLuJzx2jBFZ0xm4-8MFvM0'
  private sessionUser: any;
  constructor() {this.sessionUser = this.getSessionUser();}
  ngOnInit(): void {
  // Lấy dữ liệu từ Local Storage và gán cho biến user
  this.user = this.getLocalUser();
  }
 // Lưu dữ liệu người dùng vào Local Storage
 setLocalUser(user: any): void {
   localStorage.setItem(this.userKey, JSON.stringify(user));
 }
// Lưu dữ liệu người dùng vào Session Storage
setSessionUser(user: any): void {
 sessionStorage.setItem(this.userKey, JSON.stringify(user));
 this.sessionUser = user;
}
 // Lấy dữ liệu người dùng từ Local Storage
 getLocalUser(): any {
   const userString = localStorage.getItem(this.userKey);
   return userString ? JSON.parse(userString) : null;
 }

 // Lấy dữ liệu người dùng từ Session Storage
 getSessionUser(): any {
   if (this.sessionUser) {
     return this.sessionUser;
   }
   const userString = sessionStorage.getItem(this.userKey);
   return userString ? JSON.parse(userString) : null;
 }

 // Xóa dữ liệu người dùng khỏi Local Storage
 removeLocalUser(): void {
   localStorage.removeItem(this.userKey);
 }

 // Xóa dữ liệu người dùng khỏi Session Storage
 removeSessionUser(): void {
   sessionStorage.removeItem(this.userKey);
   this.sessionUser = null;
 }

 setUserData(): void {
   const user = {
     "tenDangNhap": "ChauManhTan",
     "matKhau": "123",
     "trangThai": true,
     "email": "ChauManhTan@gmail.com",
     "canCuocCongDan": "231888444555",
     "hoVaTen": "Châu Mạnh Tấn",
     "gioiTinh": true,
     "ngaySinh": "2001-02-16",
     "diaChi": "Cần Thơ",
     "soDienThoai": "917777777 ",
     "ngayTaoTaiKhoan": "2023-09-30",
     "anhDaiDien": "",
     "lopThi": null,
     "vaiTro": {
         "maVaiTro": 1,
         "tenVaiTro": "Học sinh"
     }
 };

   // Set cứng vào Local Storage
   this.setLocalUser(user);
   // Set cứng vào Session Storage
   this.setSessionUser(user);
 }


 // Hàm tính tuổi từ ngày tháng năm sinh
calculateAge(dateOfBirth: string): number {
  const birthDate = new Date(dateOfBirth);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();

  // Kiểm tra xem ngày sinh trong năm hiện tại chưa đến
  const isBirthdayPassed = (
    currentDate.getMonth() > birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() >= birthDate.getDate())
  );

  // Trừ đi 1 nếu chưa đến ngày sinh trong năm hiện tại
  if (!isBirthdayPassed) {
    return age - 1;
  } else {
    return age;
  }
}

}
