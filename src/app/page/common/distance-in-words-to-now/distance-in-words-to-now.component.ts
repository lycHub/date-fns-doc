import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distance-in-words-to-now',
  templateUrl: './distance-in-words-to-now.component.html'
})
export class DistanceInWordsToNowComponent implements OnInit {
  dataSet = [{}];

  dataSets = [
    {
      distance: '0 ... 30 secs',
      result : 'less than a minute'
    },
    {
      distance: '30 secs ... 1 min 30 secs',
      result : '1 minute'
    },
    {
      distance: '1 min 30 secs ... 44 mins 30 secs',
      result : '[2..44] minutes'
    },
    {
      distance: '44 mins ... 30 secs ... 89 mins 30 secs',
      result : 'about 1 hour'
    },
    {
      distance: '89 mins 30 secs ... 23 hrs 59 mins 30 secs',
      result : 'about [2..24] hours'
    },
    {
      distance: '23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs',
      result : '1 day'
    },
    {
      distance: '41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs',
      result : '[2..30] days'
    },
    {
      distance: '29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs',
      result : 'about 1 month'
    },
    {
      distance: '44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs',
      result : 'about 2 months'
    },
    {
      distance: '59 days 23 hrs 59 mins 30 secs ... 1 yr',
      result : '[2..12] months'
    },
    {
      distance: '1 yr ... 1 yr 3 months',
      result : 'about 1 year'
    },
    {
      distance: '1 yr 3 months ... 1 yr 9 month s',
      result : 'over 1 year'
    },
    {
      distance: '1 yr 9 months ... 2 yrs',
      result : 'almost 2 years'
    },
    {
      distance: 'N yrs ... N yrs 3 months',
      result : 'about N years'
    },
    {
      distance: 'N yrs 3 months ... N yrs 9 months',
      result : 'over N years'
    },
    {
      distance: 'N yrs 9 months ... N+1 yrs',
      result : 'almost N+1 years'
    }
  ];

  dataSetsWithSeconds = [{
    distance: '0 secs ... 5 secs',
    result : 'less than 5 seconds'
  }, {
    distance: '5 secs ... 10 secs',
    result : 'less than 10 seconds'
  }, {
    distance: '10 secs ... 20 secs',
    result : 'less than 20 seconds'
  }, {
    distance: '20 secs ... 40 secs',
    result : 'half a minute'
  }, {
    distance: '40 secs ... 60 secs',
    result : 'less than a minute'
  }, {
    distance: '60 secs ... 90 secs',
    result : '1 minute'
  }];
  constructor() { }

  ngOnInit() {
  }

}
