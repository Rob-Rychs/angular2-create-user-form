import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the Angular2 tutotial';


  constructor(private mail:MailService){}
}