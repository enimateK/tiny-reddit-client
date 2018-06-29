import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from '../user.service';

@Injectable()
export class MessagesService {

  constructor(private http: HttpClient, private userService: UserService) { }


  findAll(): Observable<any> {
    return this.http.post('https://1-dot-new-projet-07022017.appspot.com/_ah/api/messageendpoint/v1/Tendance', {});
  }

  findMyMessages(): Observable<any> {
    return this.http.post('https://1-dot-new-projet-07022017.appspot.com/_ah/api/messageendpoint/v1/MesMessage/' + this.userService.getCurrentUser().mail, {});
  }

  findMyVotes(): Observable<any> {
    return this.http.post('https://1-dot-new-projet-07022017.appspot.com/_ah/api/messageendpoint/v1/MesVote/' + this.userService.getCurrentUser().mail, {});
  }

  karmaPlus(msgId): Observable<any> {
    return this.http.post( 'https://1-dot-new-projet-07022017.appspot.com/_ah/api/messageendpoint/v1/VoterPlus/' + msgId + '/' + this.userService.getCurrentUser().mail, {});
  }

  karmaMinus(msgId): Observable<any> {
    return this.http.post( 'https://1-dot-new-projet-07022017.appspot.com/_ah/api/messageendpoint/v1/VoterContre/' + msgId + '/' + this.userService.getCurrentUser().mail, {});
  }

  registerMessage(message) {
    return this.http.post( 'https://1-dot-new-projet-07022017.appspot.com/_ah/api/messageendpoint/v1/CreerMessage/' + this.userService.getCurrentUser().mail + '/' + message, {});
  }
}
