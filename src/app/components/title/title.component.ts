import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
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
    private router: Router,
    private titleServer: Title
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.titleServer.setTitle(`${this.title} | ${Company.name}`);
          this.mainTitle = this.title.split(' - ')[0];
        }, 0);
      }
    });
  }

  ngOnInit(): void {
  }

}
