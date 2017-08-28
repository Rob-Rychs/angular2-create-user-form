import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ng2vidtutComponent } from './ng2-video-tutorial/ng2-vid-tut.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service';
import { UserProfileComponent } from './users/user-profile.component';
import { UserFormComponent } from './users/user-form.component';

@NgModule({
  declarations: [
    ng2vidtutComponent,
    SimpleFormComponent,
    UserProfileComponent,
    UserFormComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent] // this is the core component we want to use
})
export class AppModule { }
