import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  currentUser: any;
  isConnected = false;

  login(user) {
   this.currentUser = user;
   this.isConnected = true;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
