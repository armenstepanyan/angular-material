import {Component, OnInit, Input, Output, ViewChild, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
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

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.initTable();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.list) {
      this.initTable();
    }
  }

  initTable() {
    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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
