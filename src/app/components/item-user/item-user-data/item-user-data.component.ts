import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-item-user-data',
  templateUrl: './item-user-data.component.html',
  styleUrls: ['./item-user-data.component.scss']
})
export class ItemUserDataComponent implements OnInit, OnChanges {
  userDefaultImg = this.authService.userDefaultImg;
  isActiveLink = false;

  @Input() user!: any;
  @Input() createdAt!: Date;
  @Input() createdAtText!: string;
  @Input() userPhotoSize!: number;
  @Input() noBorder!: boolean;


  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.isActiveLink = this.user._id === this.route.snapshot.paramMap.get('id');
  }

}
