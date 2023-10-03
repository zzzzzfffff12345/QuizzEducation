import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { KyThi } from 'src/app/models/KyThi.entity';

@Component({
  selector: 'app-manage-student-home',
  templateUrl: './manage-student-event.component.html',
  styleUrls: ['./manage-student-event.component.scss'],
})
export class ManageStudentHomeComponent implements OnInit, OnInit {
  public listKyThi: KyThi[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private renderer: Renderer2, private router: Router, private httpClient: HttpClient) { }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    }
    this.httpClient.get<KyThi[]>(`http://localhost:8080/quizzeducation/api/kythi`)
      .subscribe(data => {
        this.listKyThi = data
      });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
