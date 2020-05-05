import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProyectoDemo';


  employee_list:any[];
  request:any;

  constructor(private apiService:ApiService){
      /*this.apiService.send()
        .subscribe(resultado => {
          console.log('Exitosos');
          console.log(resultado);
        });
    */
    this.request = {};
    this.apiService.getEmployees()
      .subscribe(resultado => {  
        this.employee_list = resultado.data;
      });

  }

  send(){
    console.log(this.request);
  }
}
