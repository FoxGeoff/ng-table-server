import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns = ['seqNo', 'description', 'duration'];
  dataSource = [];

  constructor() { }

  ngOnInit(): void {
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

}
