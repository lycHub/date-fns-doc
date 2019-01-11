import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map, mergeMap} from "rxjs/internal/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  menus = [{
    name: 'common',
    title: '公共(common)',
    children: [{
      label: 'closestIndexTo',
      link: '/closestIndexTo'
    }, {
      label: 'closestTo',
      link: '/closestTo'
    }, {
      label: 'compareAsc',
      link: '/compareAsc'
    }, {
      label: 'compareDesc',
      link: '/compareDesc'
    }, {
      label: 'distanceInWords',
      link: '/distanceInWords'
    }, {
      label: 'distanceInWordsStrict',
      link: '/distanceInWordsStrict'
    }, {
      label: 'distanceInWordsToNow',
      link: '/distanceInWordsToNow'
    }, {
      label: 'format',
      link: '/format'
    }, {
      label: 'isAfter',
      link: '/isAfter'
    }, {
      label: 'isBefore',
      link: '/isBefore'
    }, {
      label: 'isDate',
      link: '/isDate'
    }, {
      label: 'isEqual',
      link: '/isEqual'
    }, {
      label: 'isFeatrue',
      link: '/isFeatrue'
    }, {
      label: 'isPast',
      link: '/isPast'
    }, {
      label: 'isValid',
      link: '/isValid'
    }, {
      label: 'max',
      link: '/max'
    }, {
      label: 'min',
      link: '/min'
    }, {
      label: 'parse',
      link: '/parse'
    }]
  }, {
    name: 'range',
    title: '范围(range)',
    children: [{
      label: 'areRangesOverlapping',
      link: '/areRangesOverlapping'
    }, {
      label: 'getOverlappingDaysInRanges',
      link: '/getOverlappingDaysInRanges'
    }, {
      label: 'isWithinRange',
      link: '/isWithinRange'
    }]
  }, {
    name: 'timestamp',
    title: '时间戳(timestamp)',
    children: [{
      label: 'getTime',
      link: '/getTime'
    }]
  }, {
    name: 'millisecond',
    title: '毫秒(millisecond)',
    children: [{
      label: 'addMilliseconds',
      link: '/addMilliseconds'
    }, {
      label: 'differenceInMilliseconds',
      link: '/differenceInMilliseconds'
    }, {
      label: 'getMilliseconds',
      link: '/getMilliseconds'
    }, {
      label: 'setMilliseconds',
      link: '/setMilliseconds'
    }, {
      label: 'subMilliseconds',
      link: '/subMilliseconds'
    }]
  }, {
    name: 'second',
    title: '秒(second)',
    children: [{
      label: 'addSeconds',
      link: '/addSeconds'
    }, {
      label: 'differenceInSeconds',
      link: '/differenceInSeconds'
    }, {
      label: 'endOfSecond',
      link: '/endOfSecond'
    }, {
      label: 'getSeconds',
      link: '/getSeconds'
    }, {
      label: 'isSameSecond',
      link: '/isSameSecond'
    }, {
      label: 'isThisSecond',
      link: '/isThisSecond'
    }, {
      label: 'setSeconds',
      link: '/setSeconds'
    }, {
      label: 'subSeconds',
      link: '/subSeconds'
    }]
  }, {
    name: 'minute',
    title: '分(minute)',
    children: [{
      label: 'addMinutes',
      link: '/addMinutes'
    }, {
      label: 'differenceInMinutes',
      link: '/differenceInMinutes'
    }, {
      label: 'endOfMinute',
      link: '/endOfMinute'
    }, {
      label: 'getMinutes',
      link: '/getMinutes'
    }, {
      label: 'isSameMinute',
      link: '/isSameMinute'
    }, {
      label: 'setMinutes',
      link: '/setMinutes'
    }, {
      label: 'startOfMinute',
      link: '/startOfMinute'
    }, {
      label: 'subMinutes',
      link: '/subMinutes'
    }]
  }, {
    name: 'hour',
    title: '时(hour)',
    children: [{
      label: 'addHours',
      link: '/addHours'
    }, {
      label: 'differenceInHours',
      link: '/differenceInHours'
    }, {
      label: 'endOfHour',
      link: '/endOfHour'
    }, {
      label: 'getHours',
      link: '/getHours'
    }, {
      label: 'isSameHour',
      link: '/isSameHour'
    }, {
      label: 'setHours',
      link: '/setHours'
    }, {
      label: 'startOfHour',
      link: '/startOfHour'
    }, {
      label: 'subHours',
      link: '/subHours'
    }]
  }];
// millisecond/addMilliseconds
  currentInfo: { parent: string; label: string };


  constructor(private router: Router, private routerInfo: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd),
        map(() => this.routerInfo), map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }), mergeMap(route => route.data))
      .subscribe(data => {
        const info = data.info.split('/', 2);
        this.currentInfo = {
          parent: info[0],
          label: info[1]
        };
      });
  }

  trackBySubs(index: number, sub): string { return sub.title; }
  trackBySubChilds(index: number, child): string { return child.label; }
}
