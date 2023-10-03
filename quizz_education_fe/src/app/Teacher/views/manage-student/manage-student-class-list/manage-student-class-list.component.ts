import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LopThi } from 'src/app/models/LopThi.entity';

@Component({
  selector: 'app-manage-student-class-list',
  templateUrl: './manage-student-class-list.component.html',
  styleUrls: ['./manage-student-class-list.component.scss'],
  providers: [DatePipe]
})
export class ManageStudentClassListComponent implements OnInit, OnDestroy, AfterViewInit {
  public classList: LopThi[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  id: number;
  id2: number;
  constructor(
    private httpClient: HttpClient,
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.id2 = params['id2'];
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10
      }
      this.httpClient.get<LopThi[]>(`http://localhost:8080/quizzeducation/api/lopthi?kithi=${this.id}&monthi=${this.id2}`)
        .subscribe(data => {
          this.classList = data
        });
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(0);
  }

  getRouteLink(id: number, id2: number, id3: number): string {
    return '/teacher/manage-student/event/' + id + '/subject/' + id2 + '/class/' + id3 + '/student'
  }
}
