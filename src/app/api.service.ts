import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiServer: string;

  constructor(private http: HttpClient) { 
    this.apiServer = environment.apiServer;
    }

  send():Observable<any>{
    let request = {
      "prorrogaRequest":
      {
        "tipoDocumento": 1,
        "numeroDocumento": "23802609",
        "nombres": "CARMEN",
        "apellidoPaterno": "RAMIREZ",
        "apellidoMaterno": "ZEVALLOS",
        "telefono": "976236702",
        "correoElectronico": "conrrad.martinez@gmail.com",
        "ciudad": "lima",
        "recaptchaResponse": ""
      },
      "ruc": "",
      "ventaPromedio": "12000.56",
      "contribucionEsSalud": "4000.25",
      "periodoGracia": "12"
    };


    return this.http.post<any>(`${this.apiServer}msusuario/usuario/reactiva`, request);
  }

  getEmployees():Observable<any>{
    return this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees');

  }

}
