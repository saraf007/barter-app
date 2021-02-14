// Angular
import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading:boolean = false;

  constructor() {}

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    console.log(form.value);
  }

}
