import { Component } from '@angular/core';
import {Service,Company} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Service]
})
export class AppComponent {
  dataSource: Company[];

  constructor(service: Service) {
    this.dataSource = service.getCompanies();
  }
  
}
