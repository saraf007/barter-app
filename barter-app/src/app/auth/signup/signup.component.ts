// Angular
import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading:boolean = false;

  constructor() {}

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    console.log(form.value);
  }

}
