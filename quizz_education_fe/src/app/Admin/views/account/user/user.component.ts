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

  // Tạo học sinh
  createHocSinh(){
    
  }


  // Xuất excel
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.listStudent);
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
