import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-contest',
  templateUrl: './table-contest.component.html',
  styleUrls: ['./table-contest.component.scss']
})
export class TableContestComponent implements AfterViewInit, OnInit {

  dtOptions: DataTables.Settings = {};
  constructor(private renderer: Renderer2, private router: Router) { }
  ngOnInit(): void {
    this.dtOptions = {
      ajax: {
        url: 'https://xtlncifojk.eu07.qoddiapp.com/', 
        type: 'GET',
        dataSrc: 'data' 
      },
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }, {
        title: 'Action',
        render: function (data: any, type: any, full: any) {
          return 'View';
        }
      }]
    };
  }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.hasAttribute("view-person-id")) {
        this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
      }
    });
  }
}
