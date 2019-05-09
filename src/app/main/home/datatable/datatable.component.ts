import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class HomeDatatableComponent implements OnInit {

  @Input() dataTable: any;

  constructor() { }

  ngOnInit() {
  }

}
