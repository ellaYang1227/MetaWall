import { Component, OnInit } from '@angular/core';
import { MemberService } from '@services/member.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-my-tracks',
  templateUrl: './my-tracks.component.html',
  styleUrls: ['./my-tracks.component.scss']
})
export class MyTracksComponent implements OnInit {
  title = '追蹤名單';
  myTracks!: any[];
  isLoading = true;

  constructor(
    private memberService: MemberService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.hide();
  }

  ngOnInit(): void {
    this.myTracks = [{
      "user": {
        "_id": "628a43c38c9d619c7bbcbbff",
        "name": "BootBB111",
        "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/wAAGeIJNwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="
      },
      "createdAt": "2022-05-24T11:57:09.367Z"
    }, {
      "user": {
        "_id": "628a43c38c9d619c7bbcbbff",
        "name": "BootBB111",
        "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/wAAGeIJNwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="
      },
      "createdAt": "2022-05-24T11:57:09.367Z"
    }];

    setTimeout(() => this.isLoading = false, 1000);
  }

  getMyTrackDay(createdAt: Date): number {
    const todayMillisecond = new Date().getTime();
    const createdAtMillisecond = new Date(createdAt).getTime();
    const differMillisecond = todayMillisecond - createdAtMillisecond;
    return Math.ceil(differMillisecond / (1000 * 24 * 60 * 60));
  }
}
