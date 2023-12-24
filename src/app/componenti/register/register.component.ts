import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    onInit() {

    }
    onSubmit(form: NgForm) {
      const email = form.value.email;
      const password = form.value.password;
      //chiamare authservice
    }
}
