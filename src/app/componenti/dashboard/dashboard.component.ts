import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})

export class DashboardComponent implements OnInit {

  public data: [
    {
      name: string,
      surname: string
    }
  ];

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
      this.getData();
  }

  toggle(){

  }
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

  getData() {
    this.dataService.getData().subscribe((response: any) => {
      this.data = response;
      console.log(this.data);
    })
  }


}



