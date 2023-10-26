import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-student-subject',
  templateUrl: './manage-student-subject.component.html',
  styleUrls: ['./manage-student-subject.component.scss']
})
export class ManageStudentSubjectComponent implements OnInit {
  public listMonThi: any[];
  public currentEvent: number;
  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.currentEvent = id
    });
    this.httpClient.get<[]>(`http://localhost:8080/quizzeducation/api/monthi?kithi=${this.currentEvent}`)
      .subscribe(data => {
        this.listMonThi = data
      });
  }

  public getValueSearch() {
    return this.formFilter.get('search')?.value;
  }
  public formFilter = this.formBuilder.group({
    setRows: new FormControl(5),
    search: new FormControl('')
  })
}
