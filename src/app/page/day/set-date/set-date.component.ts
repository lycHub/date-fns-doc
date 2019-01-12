import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-date',
  templateUrl: './set-date.component.html'
})
export class SetDateComponent implements OnInit {
  dataSet = [{}];
  constructor() { }

  ngOnInit() {
  }

}
