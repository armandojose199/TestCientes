import { Component } from '@angular/core';
import { ServiceService } from './servicio/service.service';
import { ResponseServicioClientes } from './modelo/response-servicio-clientes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiceService]
})

export class AppComponent {

  responseClientes: ResponseServicioClientes[];
  
  constructor (private servicioService: ServiceService ){

  }

  obtenerClientes(){
    this.servicioService.obtenerClientes().then(
      response => {this.responseClientes = response}
    )
  }
  
  
}

