import { Component} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

// SetDATA nhe
 
  private userKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5EYW5nTmhhcCI6IkNoYXVNYW5oVGFuIiwibWF0S2hhdSI6IjEyMyIsInRyYW5nVGhhaSI6dHJ1ZSwiZW1haWwiOiJDaGF1TWFuaFRhbkBnbWFpbC5jb20iLCJjYW5DdW9jQ29uZ0RhbiI6IjIzMTg4ODQ0NDU1NSIsImhvVmFUZW4iOiJDaMOidSBN4bqhbmggVOG6pW4iLCJnaW9pVGluaCI6dHJ1ZSwibmdheVNpbmgiOiIyMDAxLTAyLTE2IiwiZGlhQ2hpIjoiQ-G6p24gVGjGoSIsInNvRGllblRob2FpIjoiMDkxNzc3Nzc3NyIsIm5nYXlUYW9UYWlLaG9hbiI6IjIwMjMtMDktMzAiLCJhbmhEYWlEaWVuIjoiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9xdWl6emVkdWNhdGlvbi1lYWVhMy5hcHBzcG90LmNvbS9vL2ltYWdlcyUyRkNoYXVNYW5oVGFuLmpwZz9hbHQ9bWVkaWEmdG9rZW49OGYwZGM5OWYtOTI3Zi00NDBlLTlhNTAtYTA1NWUwZDg5OWUyIiwibG9wVGhpIjp7Im1hTG9wVGhpIjoxLCJ0ZW5Mb3AiOiJM4bubcCA4QTEiLCJzb0x1b25nVG9pRGEiOjMwfSwidmFpVHJvIjp7Im1hVmFpVHJvIjoxLCJ0ZW5WYWlUcm8iOiJI4buNYyBzaW5oIn19.NxjI1-Ni2S8p3YHJ-1VXXttS6BcepYBqZdf8sLNSrKU'
  private sessionUser: any;
  constructor() {this.sessionUser = this.getSessionUser();}
  
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
    "soDienThoai": "0917777777",
    "ngayTaoTaiKhoan": "2023-09-30",
    "anhDaiDien": "https://firebasestorage.googleapis.com/v0/b/quizzeducation-eaea3.appspot.com/o/images%2FChauManhTan.jpg?alt=media&token=8f0dc99f-927f-440e-9a50-a055e0d899e2",
    "lopThi": {
        "maLopThi": 1,
        "tenLop": "Lớp 8A1",
        "soLuongToiDa": 30
    },
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
// SetDATA nhe



//-------------------------------------------------------- MAIN--------------------------------------------------------------------------------------

// Nếu chưa có ảnh thì set ảnh default
defaultImage: string = 'https://firebasestorage.googleapis.com/v0/b/quizzeducation-eaea3.appspot.com/o/images%2Fdefault-user.png?alt=media&token=9242ab38-66aa-4764-a726-bceb152ff1e4';
  
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

user: any;
ngOnInit(): void {
  // Lấy dữ liệu từ Local Storage và gán cho biến user
  this.user = this.getLocalUser();
  }

//Đổi ảnh
selectedImage: File | undefined;
openFileInput() {
  // Mở cửa sổ chọn tệp bằng cách kích hoạt input[type="file"]
  document.getElementById('fileInput')?.click();
}

showSettings = false;

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }
}
