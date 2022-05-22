import { Component, OnInit } from '@angular/core';
import { Company } from '@data/company';
import { AuthService, userInfo } from '@services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  companyName = Company.name;

  public get user(): userInfo | undefined {
    return this.authService.user;
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
