import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @Input() recipientId: number;
  messages: Message[];
  newMessage: any = {};

  constructor(private userService: UserService,
              private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.userService.getMessageThread(this.authService.decodedToken.nameid, this.recipientId)
    .subscribe(messages => {
      this.messages = messages;
    }, error => {
      this.alertify.error(error);
    });
  }

  sendMessages() {
    this.newMessage.recipientId = this.recipientId;
    this.userService.sendMessage(this.authService.decodedToken.nameid, this.newMessage)
    .subscribe((message: Message) => {
      this.messages.unshift(message);
      this.newMessage.content = '';
    }, error => {
      this.alertify.error(error);
    });
  }

}
