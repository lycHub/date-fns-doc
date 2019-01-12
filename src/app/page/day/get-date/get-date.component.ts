import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-date',
  templateUrl: './get-date.component.html'
})
export class GetDateComponent implements OnInit {
  dataSet = [{}];
  constructor() { }

  ngOnInit() {
  }

}
