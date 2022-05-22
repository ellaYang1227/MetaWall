import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Company } from '@data/company';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = Company.name;
  show = false;

  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private spinner: NgxSpinnerService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) { this.spinner.show() }
      if (event instanceof NavigationEnd) {
        setTimeout(() => this.show = this.router.url.indexOf('sign') > -1 ? false : true, 0);
      }
    });
  }

  ngOnInit(): void {

  }

  ngAfterContentChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
}
