import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qizz_education_fe2';
  // Giả định rằng role là 'user' hoặc 'admin'
  userRole: string = 'user'; // Để demo cho người dùng

  // Hàm để kiểm tra vai trò người dùng
  isUserLoggedIn() {
    return this.userRole === 'user';
  }

  isAdminLoggedIn() {
    return this.userRole === 'admin';
  }
}
