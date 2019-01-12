import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-each-day',
  templateUrl: './each-day.component.html'
})
export class EachDayComponent implements OnInit {
  dataSet = [{}];
  constructor() { }

  ngOnInit() {
  }

}
