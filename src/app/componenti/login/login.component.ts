import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  onInit() {

  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    //chiamare authservice
  }
}
