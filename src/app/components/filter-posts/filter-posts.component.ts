import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-filter-posts',
  templateUrl: './filter-posts.component.html',
  styleUrls: ['./filter-posts.component.scss']
})
export class FilterPostsComponent implements OnInit {
  initFilter!: any;

  filter = {
    sort: '',
    keyword: ''
  };

  sortOptions = [{
    name: '從新到舊',
    value: ''
  }, {
    name: '從舊到新',
    value: 'asc'
  }];

  @Output() postFilter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.getFilterData();
  }

  getFilterData() {
    this.filter.keyword = this.filter.keyword.trim();
    if (!this.initFilter || this.initFilter.sort !== this.filter.sort || this.initFilter.keyword !== this.filter.keyword) {
      this.initFilter = JSON.parse(JSON.stringify(this.filter));
      this.postFilter.emit(this.filter);
    }
  }
}
