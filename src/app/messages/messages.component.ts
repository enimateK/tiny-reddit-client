import {Component, OnInit} from '@angular/core';
import {MessagesService} from './messages.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {

  messages: any;
  isConfirmModalShown = false;
  formData: any = {};

  constructor(
    private messagesService: MessagesService, private userService: UserService
  ) {
  }

  ngOnInit() {
    this.fetchMessages();
  }

  fetchMessages() {
      this.messagesService.findAll()
        .subscribe((data) => {
          this.messages = data.items;
        }
        );


    this.messages = this.messagesService.findAll();
  }

  fetchMyVotes() {
    if (this.userService.isConnected) {
      this.messagesService.findMyVotes()
        .subscribe((data) => {
            this.messages = data.items;
          }
        );

      this.messages = this.messagesService.findMyVotes();
    } else {
      alert('Vous devez être connecté !');
    }
  }

  fetchMyMessages() {
    if (this.userService.isConnected) {
      this.messagesService.findMyMessages()
        .subscribe((data) => {
            this.messages = data.items;
          }
        );

      this.messages = this.messagesService.findMyMessages();
    } else {
      alert('Vous devez être connecté !');
    }
  }

  karmaPlus(msgId) {
    if (this.userService.isConnected) {
      this.messagesService.karmaPlus(msgId).subscribe((data) => {
        this.fetchMessages();
      });
    } else {
      alert('Vous devez être connecté !');
    }
  }

  karmaMinus(msgId) {
    if (this.userService.isConnected) {
      this.messagesService.karmaMinus(msgId).subscribe((data) => {
        this.fetchMessages();
      });
    } else {
      alert('Vous devez être connecté !');
    }
  }

  registerMessage() {
    if (this.userService.isConnected) {
      this.messagesService.registerMessage(this.formData.message).subscribe((data) => {
        this.fetchMessages();
      });
    } else {
      alert('Vous devez être connecté !');
    }
    this.isConfirmModalShown = false;
  }

  showConfirmModal() {
    this.isConfirmModalShown = true;
  }
}
