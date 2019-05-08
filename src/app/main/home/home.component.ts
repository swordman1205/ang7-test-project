import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  statusDataTable: any = {
    headers: [
      { title: 'Location', name: 'location' },
      { title: 'Asset', name: 'asset' },
      { title: 'Measure', name: 'measure' },
      { title: 'Status', name: 'status' },
      { title: 'Time', name: 'time' },
    ],
    data: [
      {
        location: 'CDC',
        asset: 'CDC Asset',
        measure: 'CDC Virtual',
        status: 'Ok',
        time: 'Nov 12, 2018 5:55 AM'
      },
      {
        location: 'CDC',
        asset: 'CDC Asset',
        measure: 'CDC Virtual',
        status: 'Ok',
        time: 'Nov 12, 2018 5:55 AM'
      },
      {
        location: 'CDC',
        asset: 'CDC Asset',
        measure: 'CDC Virtual',
        status: 'Ok',
        time: 'Nov 12, 2018 5:55 AM'
      },
      {
        location: 'CDC',
        asset: 'CDC Asset',
        measure: 'CDC Virtual',
        status: 'Ok',
        time: 'Nov 12, 2018 5:55 AM'
      },
      {
        location: 'CDC',
        asset: 'CDC Asset',
        measure: 'CDC Virtual',
        status: 'Ok',
        time: 'Nov 12, 2018 5:55 AM'
      },
      {
        location: 'CDC',
        asset: 'CDC Asset',
        measure: 'CDC Virtual',
        status: 'Ok',
        time: 'Nov 12, 2018 5:55 AM'
      },
      {
        location: 'CDC',
        asset: 'CDC Asset',
        measure: 'CDC Virtual',
        status: 'Ok',
        time: 'Nov 12, 2018 5:55 AM'
      }
    ]
  };

  activityDataTable: any = {
    headers: [
      { title: 'User', name: 'user' },
      { title: 'Action', name: 'action' },
      { title: 'Item', name: 'item' },
      { title: 'Time', name: 'time' }
    ],
    data: [
      {
        user: 'admin',
        action: 'Get Asset Ticket Summary',
        item: 'CDC_Asset',
        Time: 'Nov 12, 2018 5:55 AM'
      },
      {
        user: 'admin',
        action: 'Get Asset Ticket Summary',
        item: 'CDC_Asset',
        Time: 'Nov 12, 2018 5:55 AM'
      },
      {
        user: 'admin',
        action: 'Get Asset Ticket Summary',
        item: 'CDC_Asset',
        Time: 'Nov 12, 2018 5:55 AM'
      },
      {
        user: 'admin',
        action: 'Get Asset Ticket Summary',
        item: 'CDC_Asset',
        Time: 'Nov 12, 2018 5:55 AM'
      },
      {
        user: 'admin',
        action: 'Get Asset Ticket Summary',
        item: 'CDC_Asset',
        Time: 'Nov 12, 2018 5:55 AM'
      },
      {
        user: 'admin',
        action: 'Get Asset Ticket Summary',
        item: 'CDC_Asset',
        Time: 'Nov 12, 2018 5:55 AM'
      },
      {
        user: 'admin',
        action: 'Get Asset Ticket Summary',
        item: 'CDC_Asset',
        Time: 'Nov 12, 2018 5:55 AM'
      }
    ]
  };

  activeAlarms: any = {
    data: [
      { name: 'Critical', value: 20 },
      { name: 'Disconnected', value: 30 },
      { name: 'Alarm', value: 50 },
    ],
    scheme: { domain: ['#ff7686', '#3393e0', '#d1a64c']}
  };

  constructor() { }

  ngOnInit() {
  }

}
