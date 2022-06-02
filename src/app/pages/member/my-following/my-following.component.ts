import { Component, OnInit } from '@angular/core';
import { MemberService } from '@services/member.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-my-following',
  templateUrl: './my-following.component.html',
  styleUrls: ['./my-following.component.scss']
})
export class MyFollowingComponent implements OnInit {
  title = '追蹤名單';
  myFollowing!: any[];
  isLoading = true;

  constructor(
    private memberService: MemberService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.hide();
  }

  ngOnInit(): void {
    this.memberService.getFollowing().subscribe(data => {
      this.myFollowing = data;
      setTimeout(() => this.isLoading = false, 1000);
    });
  }

  getFollowDay(createdAt: Date): number {
    const todayMillisecond = new Date().getTime();
    const createdAtMillisecond = new Date(createdAt).getTime();
    const differMillisecond = todayMillisecond - createdAtMillisecond;
    return Math.ceil(differMillisecond / (1000 * 24 * 60 * 60));
  }
}
