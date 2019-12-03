import { Component } from '@angular/core';
import { ListItem } from '@app/interface/list-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material';
  list = [
    { id: 1, name: 'name1' },
    { id: 2, name: 'name2' },
    { id: 3, name: 'name3' },
    { id: 4, name: 'name4' },
    { id: 5, name: 'name5' },
  ];

  onDelete(id: number) {
    this.list = this.list.filter(item => item.id !== id);
  }

  onCopy(item: ListItem) {
    this.list = [...this.list, item];
  }
}
