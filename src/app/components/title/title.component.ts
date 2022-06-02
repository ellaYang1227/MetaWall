import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Company } from '@data/company';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  mainTitle!: string;
  @Input() title!: string;

  constructor(
    private titleServer: Title
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.titleServer.setTitle(`${this.title} | ${Company.name}`);
    this.mainTitle = this.title.split(' - ')[0];
  }
}
