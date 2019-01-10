import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distance-in-words-strict',
  templateUrl: './distance-in-words-strict.component.html'
})
export class DistanceInWordsStrictComponent implements OnInit {
  dataSet = [{}];

  dataSets = [
    {
      distance: '0 ... 59 secs',
      result : '[0..59] seconds'
    },
    {
      distance: '1 ... 59 mins',
      result : '[1..59] minutes'
    },
    {
      distance: '1 ... 23 hrs',
      result : '[1..23] hours'
    },
    {
      distance: '1 ... 29 days',
      result : '[1..29] days'
    },
    {
      distance: '1 ... 11 months',
      result : '[1..11] months'
    },
    {
      distance: '1 ... N years',
      result : '[1..N] years'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
