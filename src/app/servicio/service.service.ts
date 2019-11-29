import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ResponseServicioClientes } from '../modelo/response-servicio-clientes';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url: string = 'https://gist.githubusercontent.com/AlexR1712/86ca3e58994a3ca4023eb6123eb76763/raw/f93953a95b69b02f2d7ab3e64cbbf0cc976f0f9e/db.json';
  private headers = new HttpHeaders({'Accept': 'application/json'});

  constructor( private http: HttpClient) { }

  obtenerClientes(): Promise<ResponseServicioClientes[]> {
    let headers = this.headers
    return this.http.get(this.url, {"headers": headers})
    .toPromise()
    .then(response => (response as Array<ResponseServicioClientes>))
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log(JSON.stringify(error));
    return Promise.reject(error.message || error);

  }

}
