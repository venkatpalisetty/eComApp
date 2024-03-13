import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: any = [{name: 'Type 1', id: 1, route: '/itemList/1', isActive: true},
  {name: 'Type 2', id: 2, route: '/itemList/2', isActive: true},
  {name: 'Type 3', id: 3, route: '/itemList/3', isActive: true},
  {name: 'Type 4', id: 4, route: '/itemList/4', isActive: true},
  {name: 'Type 5', id: 5, route: '/itemList/5', isActive: true},

];

  constructor() { }

  ngOnInit(): void {
  }

}
