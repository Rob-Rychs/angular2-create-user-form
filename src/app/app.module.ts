import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service';
import { UserProfileComponent } from './users/user-profile.component';
import { UserFormComponent } from './users/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    UserProfileComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent] // this is the core component we want to use
})
export class AppModule { }
