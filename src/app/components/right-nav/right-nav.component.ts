import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService, userInfo } from '@services/auth.service';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.scss']
})
export class RightNavComponent implements OnInit {
  navs: any[] = [{
    name: '首頁',
    icon: ['fas', 'house'],
    link: '/index'
  }, {
    name: '追蹤名單',
    icon: ['far', 'bell'],
    link: ''
  }, {
    name: '我按讚的文章',
    icon: ['far', 'thumbs-up'],
    link: ''
  }, {
    name: '張貼動態',
    icon: ['fas', 'plus'],
    link: '/addPost'
  }];

  desktopNavOffsetTop = 0;

  @ViewChild('desktopNav', { static: false }) desktopNav!: ElementRef;

  public get user(): userInfo {
    return this.authService.user;
  }

  constructor(
    private authService: AuthService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  getAddPostLink(): any {
    return this.navs.find(nev => nev.name === '張貼動態').link;
  }

  ngAfterViewInit(): void {
    this.desktopNavOffsetTop = this.desktopNav?.nativeElement.offsetTop;
    this.changeDetectorRef.detectChanges();
  }
}
