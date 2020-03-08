import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;

  constructor(private authService: AuthService,
              private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
  }


  sendLike(id: number) {
    this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(data => {
      this.alertify.success('You have liked: ' + this.user.knownAs);
    }, error => {
      this.alertify.error(error);
    });
  }

  sendUnlike(id: number) {
    this.userService.sendUnlike(this.authService.decodedToken.nameid, id).subscribe(data => {
      this.alertify.success('You have unliked: ' + this.user.knownAs);
    }, error => {
      this.alertify.error(error);
    });
  }

  checkLike(id: number) {
    this.userService.checkLike(this.authService.decodedToken.nameid, id).subscribe(data => {
      return data;
    }, error => {
      this.alertify.error(error);

    });
  }

}
