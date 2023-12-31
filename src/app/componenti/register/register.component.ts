import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  public data:
    {
      email: string,
      password: string
    };

  constructor(private dataService: DataService) {
    this.getData();
  }

  ngOnInit(): void {
}


    onSubmit(form: NgForm) {
      const email = form.value.email;
      const password = form.value.password;
      //chiamare authservice
      console.log(this.data);
    }

    getData() {
      this.dataService.getData().subscribe((response: any) => {
        if (response) {
          this.data = response;
          console.log(this.data);
        }
      })
    }

}
