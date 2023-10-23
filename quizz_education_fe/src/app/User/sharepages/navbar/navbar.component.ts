import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private fireStorage: AngularFireStorage,
  ) { }

  openChangeImage() {
    document.getElementById("changeImage").click();
  }

  async saveNewProfilePic(event: any) {
    var file = event.target.files[0]
    if (file.type.match(/image\/*/) && file.size <= 6000000) {
      const randomNumberString = Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)).join('');
      const path = `${randomNumberString}`
      const upload = await this.fireStorage.upload(path, file)
      const url = await upload.ref.getDownloadURL()
      console.log(url)
    } else {
      alert("Tour chỉ nhận ảnh từ 5MB trở xuống")
    }
  }

  deleteImage(url: string) {
    this.fireStorage.storage.refFromURL(url).delete()
  }
}
