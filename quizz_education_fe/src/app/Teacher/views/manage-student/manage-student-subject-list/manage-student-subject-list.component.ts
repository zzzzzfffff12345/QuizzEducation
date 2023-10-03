import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { TaiKhoan } from 'src/app/models/TaiKhoan.entity';

@Component({
  selector: 'app-manage-student-list',
  templateUrl: './manage-student-subject-list.component.html',
  styleUrls: ['./manage-student-subject-list.component.scss'],
})
export class ManageStudentListComponent implements OnInit, OnDestroy, AfterViewInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private renderer: Renderer2, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.dtOptions = {
        ajax: {
          url: `http://localhost:8080/quizzeducation/api/monthi?kithi=${id}`,
          type: 'GET',
          dataSrc: '',
          dataType: 'json',
        },
        columns: [
          {
            title: 'Mã môn',
            data: 'maMon',
          },
          {
            title: 'Tên môn',
            data: 'tenMon',
          },
          {
            title: '',
            render: function (data: any, type: any, full: any) {
              return (
                '<button class="btn btn-primary" route="' +
                full.maMon +
                '">Chi tiết</button>'
              );
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.renderer.listen('document', 'click', (event) => {
        if (event.target.hasAttribute('route')) {
          this.router.navigate([
            '/teacher/manage-student/event/' + id + '/subject/' + event.target.getAttribute('route') + '/class',
          ]);
        }
      });
    });

  }
}
