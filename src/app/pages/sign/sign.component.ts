import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Company } from '@data/company';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  name = Company.name;
  subTitle!: string;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => this.spinner.hide(), 500);
        this.subTitle = this.router.url.indexOf('/signIn') > -1 ? '到元宇宙展開全新社交圈' : '註冊';
      }
    });
  }

  ngOnInit(): void {
  }

}
