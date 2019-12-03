import {Component, OnInit, Input, Output, ViewChild, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ListItem } from '@app/interface/list-item.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() list: Array<ListItem>;
  @Output() deleteItem: EventEmitter<number> = new EventEmitter<number>();
  @Output() copyItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();

  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.list) {
      this.dataSource = new MatTableDataSource(this.list);
      this.dataSource.sort = this.sort;
    }
  }

  delete(id: number) {
    this.deleteItem.emit(id);
  }

  copy(name: string) {
    const id = +(new Date());
    name = `${name} Copy`;
    this.copyItem.emit({ id, name });
  }

}
