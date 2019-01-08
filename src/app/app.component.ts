import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs/internal/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'date-fns-docs';

  menus = [{
    name: 'common',
    title: '公共（common）',
    children: [{
      label: 'closestIndexTo',
      link: '/closestIndexTo',
      // selected: true,
      parent: 'common'
    }, {
      label: 'closestTo',
      link: '/closestTo',
      parent: 'common'
    }]
  }, {
    name: 'month',
    title: '月（Month）',
    children: [{
      label: 'closestIndexTo',
      link: '',
      parent: 'month'
    }]
  }];

  // currentInfo: { parent: string; label: string };
  currentInfo = {
    parent: 'common',
    label: 'closestIndexTo'
  };


  constructor(private router: Router, private routerInfo: ActivatedRoute) {

  }

  ngOnInit(): void {
    /*this.router.events.pipe(filter(event => event instanceof NavigationEnd), map(() => this.routerInfo)).subscribe(res => {
      res.data.subscribe(ress => {
        console.log(ress);
      })
    });*/
    /*setTimeout(() => {
      this.routerInfo.data.subscribe((res) => {
        console.log(res);
        /!*   this.currentInfo = {
             parent: res.parent,
             label: res.label
           }
           console.log(this.currentInfo);*!/
      });
    }, 2000);*/
  }

  onClick(child) {
    console.log(child);
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
