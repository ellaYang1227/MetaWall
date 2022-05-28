import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-item-user-data',
  templateUrl: './item-user-data.component.html',
  styleUrls: ['./item-user-data.component.scss']
})
export class ItemUserDataComponent implements OnInit {
  userDefaultImg = this.authService.userDefaultImg;

  @Input() user!: any;
  @Input() createdAt!: Date;
  @Input() createdAtText!: string;
  @Input() userPhotoSize!: number;
  @Input() noBorder!: boolean;


  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
