import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser:  any = {};
  isConnected = false;
  isLoginModalShown = false;

  constructor( private userService: UserService
  ) { }

  ngOnInit() {
  }

  logout(): void {
  }

  login(): void {
    this.userService.login(this.currentUser);
    this.isConnected = this.userService.isConnected;
    this.isLoginModalShown = false;
  }

  goHome() {
  }

  showLoginModal() {
    this.isLoginModalShown = true;
  }

}
