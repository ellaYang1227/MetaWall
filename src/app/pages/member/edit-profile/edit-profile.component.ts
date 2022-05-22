import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  url!: string;
  title!: string;
  activeTab: string = 'name';
  tabs: any = {
    name: '暱稱修改',
    updatePassword: '重設密碼'
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const tab = this.route.snapshot.paramMap.get('tab');
        this.url = this.router.url;
        if (tab === 'name' || tab === 'updatePassword') {
          this.activeTab = tab;
          this.title = `修改個人資料 - ${this.tabs[this.activeTab]}`;
        } else {
          if (tab) { this.router.navigateByUrl(this.url.replace(tab, 'name')) }
        }
      }
    });
  }

  ngOnInit(): void {
  }

  submitForm() {

  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
    this.router.navigateByUrl(this.url.replace(this.activeTab, changeEvent.nextId));
  }
}
