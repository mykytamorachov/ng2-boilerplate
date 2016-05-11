// app/components/app.component.ts
import { Component } from 'angular2/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'my-app',
  templateUrl: '../templates/template.html',
  directives: [AppComponent]
  providers: [UserService]
})

export class AppComponent {

	users: object[];
	title: string;

  constructor(private userService: UserService) {
    this.title = "My First Angular2 App";
  };

  getUsers() {
    this.userService.getUsers()
                   .subscribe(
                     users => this.users = users,
                     error =>  this.errorMessage = <any>error);
  };

  ngOnInit() { this.getUsers(); };
	
};