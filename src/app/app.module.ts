import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  ModalModule, DatepickerModule, RatingModule, CollapseModule, BsModalRef,
  PopoverModule
} from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MessagesComponent} from './messages/messages.component';
import {MessagesService} from './messages/messages.service';
import {UserService} from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MessagesComponent,
  ],
  imports: [
    ModalModule.forRoot(),
    DatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    PopoverModule.forRoot(),
    RatingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MessagesService,
    BsModalRef,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
