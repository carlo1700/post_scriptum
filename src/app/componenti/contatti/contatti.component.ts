import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm, ValidatorFn } from '@angular/forms'
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContattiComponent implements OnInit {
  public imgLogoPath: string = '.\\assets\\img\\WhatsApp Image 2023-12-04 at 17.59.45.jpeg';

  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: ServicesService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])] as any),
      Comment: new FormControl('', [Validators.required])
    });
  }


  onSubmit(FormData: any) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }


}
