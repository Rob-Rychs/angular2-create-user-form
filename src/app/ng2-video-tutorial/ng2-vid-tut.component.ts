import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './ng2-vid-tut.component.html',
  styleUrls: ['./ng2-vid-tut.component.css']
})
export class ng2vidtutComponent {
  title = 'the Angular2 tutotial';


  constructor(private mail:MailService){}
}
