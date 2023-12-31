import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgIf, NgFor } from '@angular/common';



@Component({
  selector: 'app-presentazione',
  templateUrl: './presentazione.component.html',
  styleUrl: './presentazione.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, SlickCarouselModule,NgIf, NgFor ],

})




export class PresentazioneComponent {

  public imgLogoPath: string = '.\\assets\\img\\WhatsApp Image 2023-12-04 at 17.59.45.jpeg';

  slides = [
    {img: "https://i0.wp.com/www.giacomocusano.com/wp-content/uploads/2016/07/coastal-wash-web.jpg?fit=1024%2C682&ssl=1"},
    {img: "https://www.venetoformazione.it/wp-content/uploads/2022/02/ottimizzare-immagini-display-retina.jpg"},
    {img: "https://media.istockphoto.com/id/636379014/it/foto/le-mani-formando-una-silhouette-un-forma-di-cuore-con-tramonto.jpg?s=612x612&w=0&k=20&c=2-nXCG7BIpn8MYu4YHFQMqX_ctuR-GhrKbfh0bwYARo="},
    {img: "https://www.donnamoderna.com/content/uploads/2020/07/Immagini-rilassanti-di-panorami-naturali.jpg"},
    {img: "https://thumbs.dreamstime.com/b/superficie-praticante-il-surfing-dell-acqua-onda-di-oceano-mare-124362369.jpg"}
  ];
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 1000,
    "pauseOnHover": true,
    "infinite": true,
    "responsive": [
      {
        "breakpoint": 992,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 3,
          "slidesToScroll": 3
      }
    },
    {
      "breakpoint": 768,
      "settings": {
        "arrows": true,
        "infinite": true,
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]
  };

}


