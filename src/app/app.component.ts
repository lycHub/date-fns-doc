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
    title: '公共（common）',
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
    title: '范围（Range）',
    children: [{
      label: 'areRangesOverlapping',
      link: '/areRangesOverlapping'
    }]
  }];

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


  /*get menus(): any[] {
    return [{
      open: true,
      title: '公共（common）',
      children: [{
        label: 'closestIndexTo',
        link: '/closestIndexTo',
        selected: true,
        parent: 'common'
      }, {
        label: 'closestTo',
        link: '/closestTo',
        parent: 'common'
      }]
    }, {
      title: 'Month',
      children: [{
        label: 'closestIndexTo',
        link: '',
        parent: 'month'
      }]
    }];
  }*/
}
