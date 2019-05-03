import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  links: any = [
    { path: 'home', title: 'Home' },
    { path: 'reports', title: 'Reports' },
    { path: 'users', title: 'Users' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
