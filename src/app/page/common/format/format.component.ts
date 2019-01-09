import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html'
})
export class FormatComponent implements OnInit {
  dataSet = [{}];

  dataSets = [
    {
      unit: '月（Month）',
      token: 'M',
      result: '1, 2, ..., 12'
    },
    {
      token: 'Mo',
      result: '1st, 2nd, ..., 12th'
    },
    {
      token: 'MM',
      result: '01, 02, ..., 12'
    },
    {
      token: 'MMM',
      result: 'Jan, Feb, ..., Dec'
    },
    {
      token: 'MMMM',
      result: 'January, February, ..., December'
    },
    {
      unit: '季度（Quarter）',
      token: 'Q',
      result: '1, 2, 3, 4'
    },
    {
      token: 'Qo',
      result: '1st, 2nd, 3rd, 4th'
    },
    {
      unit: '月/日（Day of month）',
      token: 'D',
      result: '1, 2, ..., 31'
    },
    {
      token: 'Do',
      result: '1st, 2nd, ..., 31st'
    },
    {
      token: 'DD',
      result: '01, 02, ..., 31'
    },
    {
      unit: '年/日（Day of year）',
      token: 'DDD',
      result: '1, 2, ..., 366'
    },
    {
      token: 'DDDo',
      result: '1st, 2nd, ..., 366th'
    },
    {
      token: 'DDDD',
      result: '001, 002, ..., 366'
    },
    {
      unit: '周/日（Day of week）',
      token: 'd',
      result: '0, 1, ..., 6'
    },
    {
      token: 'do',
      result: '0th, 1st, ..., 6th'
    },
    {
      token: 'dd',
      result: 'Su, Mo, ..., Sa'
    },
    {
      token: 'ddd',
      result: 'Sun, Mon, ..., Sat'
    },
    {
      token: 'dddd',
      result: 'Sunday, Monday, ..., Saturday'
    },
    {
      unit: 'ISO周/日（Day of ISO week）',
      token: 'E',
      result: '1, 2, ..., 7'
    },
    {
      unit: 'ISO周（ISO week）',
      token: 'W',
      result: '1, 2, ..., 53'
    },
    {
      token: 'Wo',
      result: '1st, 2nd, ..., 53rd'
    },
    {
      token: 'WW',
      result: '01, 02, ..., 53'
    },
    {
      unit: '年（Year）',
      token: 'YY',
      result: '00, 01, ..., 99'
    },
    {
      token: 'YYYY',
      result: '1900, 1901, ..., 2099'
    },
    {
      unit: 'ISO周编号年（ISO week-numbering year）',
      token: 'GG',
      result: '00, 01, ..., 99'
    },
    {
      token: 'GGGG',
      result: '1900, 1901, ..., 2099'
    },
    {
      unit: 'AM/PM',
      token: 'A',
      result: 'AM, PM'
    },
    {
      token: 'a',
      result: 'am, pm'
    },
    {
      token: 'aa',
      result: 'a.m., p.m.'
    },
    {
      unit: '时（Hour）',
      token: 'H',
      result: '0, 1, ... 23'
    },
    {
      token: 'HH',
      result: '00, 01, ... 23'
    },
    {
      token: 'h',
      result: '1, 2, ..., 12'
    },
    {
      token: 'hh',
      result: '01, 02, ..., 12'
    },
    {
      unit: '分（Minute）',
      token: 'm',
      result: '0, 1, ..., 59'
    },
    {
      token: 'mm',
      result: '00, 01, ..., 59'
    },
    {
      unit: '秒（Second）',
      token: 's',
      result: '0, 1, ..., 59'
    },
    {
      token: 'ss',
      result: '00, 01, ..., 59'
    },
    {
      unit: '1/10秒（1/10 of second）',
      token: 'S',
      result: '0, 1, ..., 9'
    },
    {
      unit: '1/100秒（1/100 of second）',
      token: 'SS',
      result: '00, 01, ..., 99'
    },
    {
      unit: '毫秒（Millisecond）',
      token: 'SSS',
      result: '000, 001, ..., 999'
    },
    {
      unit: '时区（Timezone）',
      token: 'Z',
      result: '-01:00, +00:00, ... +12:00'
    },
    {
      token: 'ZZ',
      result: '-0100, +0000, ..., +1200'
    },
    {
      unit: '秒时间戳（Seconds timestamp）',
      token: 'X',
      result: '512969520'
    },
    {
      unit: '毫秒时间戳（Milliseconds timestamp）',
      token: 'x',
      result: '512969520900'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
