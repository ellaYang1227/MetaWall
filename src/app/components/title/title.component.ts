import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Company } from '@data/company';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title!: string;

  constructor(
    private titleServer: Title
  ) { }

  ngOnInit(): void {
    this.titleServer.setTitle(`${this.title} | ${Company.name}`);
  }

}
