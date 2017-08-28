import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'user-form',
  styles: [`
    form {
      padding: 10px;
      background: #ECF0F1;
      border-radius: 3px;
      margin-bottom: 30px;
    }
  `],
  template: `
    <form #form="ngForm" (submit)="onSubmit()">

    form is valid: {{form.valid}}
  
      <div class="form-group" [ngClass]="{ 'has-error': name.invalid && name.touched }">
        <input type="text" class="form-control" name="name" placeholder="Name"required [(ngModel)]="newUser.name" #name="ngModel">

        <span class="help-block" *ngIf="name.invalid &&name.touched">Name is required.</span>
      </div>
      <div class="form-group" [ngClass]="{ 'has-error': username.invalid && username.touched }">
      <input type="text" class="form-control" name="username" placeholder="Username" required [(ngModel)]="newUser.username" #username="ngModel">

      <span class="help-block" *ngIf="username.invalid &&username.touched">Username is required.</span>
    </div>
    <button type="submit" class="btn btn-lg btn-block btn-primary" [disabled]="form.invaild">Create User</button>
    </form>
  `
})
export class UserFormComponent {
  newUser: User = new User();

  onSubmit() {
    console.log('are you working?');
  }
}