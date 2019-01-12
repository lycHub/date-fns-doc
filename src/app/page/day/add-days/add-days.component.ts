import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-days',
  templateUrl: './add-days.component.html'
})
export class AddDaysComponent implements OnInit {
  dataSet = [{}];
  constructor() {
    // this.data = api.pages.filter(item => item.title === 'addDays')[0].content;
    // this.exceptions = this.data.exceptions || [];
  }

  ngOnInit() {
  }

}
