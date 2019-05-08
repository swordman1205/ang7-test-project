import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  links: any = [
    { path: 'home', icon: 'home', title: 'Home' },
    { path: 'reports', icon: 'home', title: 'Reports' },
    { path: 'users', icon: 'user', title: 'Users' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
