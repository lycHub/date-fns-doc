import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map, mergeMap} from "rxjs/internal/operators";
import apiDatas from './api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  menus = [];
  // currentInfo: { parent: string; label: string };
  currentInfo = {
    parent: 'general',
    label: 'getStart'
  }


  constructor(private router: Router, private routerInfo: ActivatedRoute) {
    // console.log(apiDatas.keys);
    const category = [];
    let data = null;
    apiDatas.forEach(item => {
      const source = item.category.split(' ')[0];
      const title = source.charAt(0).toLowerCase() + source.slice(1);
      if (category.indexOf(title) === -1) {
        category.push(title);
      }
    })
    // console.log(category);
    this.menus = [];

    category.forEach(item => {
      data = {title: item, children: []};
      data.children = apiDatas.filter(val => {
        const source = val.category.split(' ')[0];
        return (source.charAt(0).toLowerCase() + source.slice(1) === item);
      });
      if (data.children.length) {
        this.menus.push(data);
      }
    });
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
