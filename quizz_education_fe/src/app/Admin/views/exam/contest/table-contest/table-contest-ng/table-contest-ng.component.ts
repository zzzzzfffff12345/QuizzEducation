
import { HttpSvService } from '../../../../../../service/API.service'
import { formatDate, formatCurrency } from '@angular/common';
import { Component, ElementRef, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-table-contest-ng',
  templateUrl: './table-contest-ng.component.html',
  styleUrls: ['./table-contest-ng.component.css']
})
export class TableContestNGComponent implements OnInit {
  public listMaterial_Note: any;
  public Itemmaterials_note: any;
  public selectedGrn: any;
  public pagination = {
    first: 0,
    rows: 5,
    totalPage: 0,
    numberPage: 1,
    sizeData: 0
  }

  public formFilter = this.formBuilder.group({
    setRows: new FormControl(5),
    search: new FormControl('')
  })


  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private elementRef: ElementRef,
    private formBuilder: FormBuilder,
    private httpService: HttpSvService,
    // private format: FormatService,
    private http: HttpClient
  ) { }



  ngOnInit(): void {
    let btn_list = this.elementRef.nativeElement.querySelector('#list-tab');
    let btn_form = this.elementRef.nativeElement.querySelector('#form-tab');
    btn_list.style.backgroundColor = 'var(--gray_50)';

    btn_list.addEventListener('click', function () {
      btn_list.style.backgroundColor = 'var(--gray_50)';
      btn_form.style.backgroundColor = 'white';

    });

    btn_form.addEventListener('click', function () {
      btn_form.style.backgroundColor = 'var(--gray_50)';
      btn_list.style.backgroundColor = 'white';
    });
    this.getData();
  }

  public formatDate(date: string) {
    // return this.format.transform(date);
  }

  public formatCurrency(money: number): string {
    return formatCurrency(money, this.locale, '');
  }


  public getData() {
    this.httpService.getList('kythi').subscribe(response => {
      this.listMaterial_Note = response;
      this.pagination.sizeData = this.listMaterial_Note.length;
      this.pagination.totalPage = Math.ceil(this.listMaterial_Note.length / this.pagination.rows);
    })
  }

  // -------------------- handle Table -------------------- //

  // pagination - table
  public next() {
    this.pagination.first = this.pagination.first + this.pagination.rows;
    if (this.pagination.first > this.pagination.sizeData) {
      this.pagination.first = this.pagination.sizeData
    }
    if (!this.isLastPage()) {
      this.pagination.numberPage++;
    }

  }

  public prev() {
    this.pagination.first = this.pagination.first - this.pagination.rows;
    if (!this.isFirstPage()) {
      this.pagination.numberPage--;
    }

  }

  public reset() {
    this.pagination.first = 0;
  }

  public isLastPage(): boolean {
    return this.pagination.numberPage == this.pagination.totalPage ? true : false;
  }

  public isFirstPage(): boolean {
    return this.pagination.numberPage === 1 ? true : false;
  }

  // pagination - table


  public setItemRow() {
    // this.pagination.rows = this.formFilter.get('setRows')?.value;
    this.pagination.totalPage = Math.ceil(this.listMaterial_Note.length / this.pagination.rows);
  }

  public getValueSearch() {
    return this.formFilter.get('search')?.value;
  }

  //get id từ html về
  openModal(id: number): void {
    this.getListById(id);
    this.idItem = id;
  }

  //Get dử liệu từ API về theo id
  public getListById(id: number): void {
    this.httpService.getItem('Material_Note', id).subscribe(response => {
      this.Itemmaterials_note = response;
      this.selectedOption = this.Itemmaterials_note.materialNoteStatus
      this.selectedOptionAcitve = this.Itemmaterials_note.materialNoteStatus

    });

  }

  // chọn trạng thái 
  options: string[] = ['Cancelled', 'Successful', 'Pending'];
  selectedOption: string = '';
  selectedOptionAcitve: string = '';
  idItem: any;

  // edit trạng thái
  public editStatus(): void {
    const updatedData = {
      materialNoteId: this.Itemmaterials_note.materialNoteId,
      productionQuantity: this.Itemmaterials_note.productionQuantity,
      materialNoteCreationDate: this.Itemmaterials_note.materialNoteCreationDate,
      materialNoteStatus: this.selectedOption,
      product: {
        productId: this.Itemmaterials_note.product.productId
      }
    };

    // ID của bản ghi bạn muốn cập nhật
    const materialNoteId = this.Itemmaterials_note.materialNoteId;

    // Gửi yêu cầu PUT đến API sử dụng service
    this.httpService.putItem('Material_Note', materialNoteId, updatedData).subscribe(
      (response) => {
        console.log('Cập nhật thành công', response);

        window.location.reload();
      },
      (error) => {
        // Xử lý lỗi nếu có
        console.error('Lỗi khi cập nhật', error);
      }
    );
  }


  // edit trạng thái
  public deleteselected(): void {
    const ids: number[] = this.selectedGrn.map((item: any) => item.materialNoteId);
    // Tạo các tham số yêu cầu
    const params = new HttpParams().set('materialnoteId', ids.join(','));

    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Thiết lập kiểu dữ liệu gửi đi (nếu cần)
    });

    // Gửi yêu cầu DELETE
    this.http.delete('http://localhost:8080/vietfurniture/api/Material_Note/deleteIds', { params, headers })
      .subscribe(
        () => {
        },
        (error) => {
          window.location.reload();
        }
      );
  }

 
}
