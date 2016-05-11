// app/app.component.ts
import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: '../templates/template.html',
  directives: [AppComponent]
})

export class AppComponent {

	users: object[];
	title: string;

  constructor() {
    this.users = [{name: "1", id : "2"}, {name: "1", id : "2"}, {name: "1", id : "2"}];
    this.title = "My First Angular2 App";
  };
	
};