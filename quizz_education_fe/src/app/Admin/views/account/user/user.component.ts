import { accountStudent } from './../../../../classes/Admin/account/user';
import { OnDestroy, Component, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpSvService } from '../../../../service/API.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  constructor(private renderer: Renderer2, private httpService: HttpSvService, private http: HttpClient,
    private formBuilder: FormBuilder,) { }

  //Sửa lại chổ tìm kiếm trong thư viện
  public getValueSearch() {
    return this.formFilter.get('search')?.value;
  }
  public formFilter = this.formBuilder.group({
    setRows: new FormControl(5),
    search: new FormControl('')
  })

  listStudent!: accountStudent[];
  ngOnInit(): void {
    this.getData();
  }

  //Lấy dử liệu về
  public getData() {
    this.httpService.getList('taikhoan/hocsinh').subscribe(response => {
      this.listStudent = response;

    })
  }
}
