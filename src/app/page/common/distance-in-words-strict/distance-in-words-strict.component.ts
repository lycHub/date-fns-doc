import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distance-in-words-strict',
  templateUrl: './distance-in-words-strict.component.html'
})
export class DistanceInWordsStrictComponent implements OnInit {
  dataSet = [{}];

  datasets = [
    {
      distance: '0 ... 30 secs',
      result : 'less than a minute'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
