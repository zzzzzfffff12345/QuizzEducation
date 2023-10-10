import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit{
  // Cuộn content-right theo chiều cao của content-left
  getContentLeftHeight(): number {
    const contentLeft = document.querySelector('.content-left') as HTMLElement;
    return contentLeft.clientHeight;
  }
  
  ngOnInit(): void {
    const test = document.querySelector('#test') as HTMLElement;
    if (test) {
      const contentLeftHeight = this.getContentLeftHeight();
      test.style.height = contentLeftHeight + 'px';
    }
  }


}
