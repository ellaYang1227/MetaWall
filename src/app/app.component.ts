import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Company } from '@data/company';
import { PageService } from '@services/page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = Company.name;
  rightNavVisible!: boolean;

  constructor(
    private pageService: PageService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {

  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.pageService.listen('components.right-nav.visible', (isVisible: boolean) => this.rightNavVisible = isVisible);
    this.changeDetectorRef.detectChanges();
  }
}
