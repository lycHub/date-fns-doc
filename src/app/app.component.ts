import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'date-fns-docs';

  menus = [{
    open: true,
    title: '公共（common）',
    children: [{
      label: 'closestIndexTo',
      link: '/closestIndexTo',
      selected: true,
      parent: 'common'
    }, {
      label: 'closestTo',
      link: '',
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

  onClick(child) {
    console.log(child);
  }

  trackBySubs(index: number, sub): string { return sub.title; }
  trackBySubChilds(index: number, child): string { return child.label; }
}
