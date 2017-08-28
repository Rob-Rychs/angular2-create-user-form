import { Component } from '@angular/core';
import { MailService } from './mail.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = 'Hello!';
  users: User[] = [
   { id: 27, name: 'Rob', username: 'rob-rychs' },
   { id: 27, name: 'Jeff', username: 'temefleet' },
   { id: 27, name: 'Lucas', username: 'RedLucas' }
  ];
  activeUser: User;

  selectUser(user) {
    this.activeUser = user;
  }

  onUserCreated(event){
    console.log(event);
    this.users.push(event.user);
  }
}
