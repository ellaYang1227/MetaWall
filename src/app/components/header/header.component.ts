import { Component, OnInit } from '@angular/core';
import { Company } from '@data/company';
import { AuthService, userInfo } from '@services/auth.service';
import { PageService } from '@services/page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  companyName = Company.name;
  visible!: boolean;

  public get user(): userInfo {
    return this.authService.user;
  }

  constructor(
    private authService: AuthService,
    private pageService: PageService
  ) { }

  ngOnInit(): void {
    this.pageService.listen('components.header.visible', (isVisible: boolean) => this.visible = isVisible);
  }
}
