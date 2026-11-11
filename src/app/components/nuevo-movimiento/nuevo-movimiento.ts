import { Component, Input, Output, EventEmitter } from '@angular/core';
// Output y EventEmitter: Emite o enviar datos desde de este componente desde el hijo hacia el padre
//Input: Permite recibir datos desde el Padre
import { CommonModule } from '@angular/common';
//CommonModule: necesario para usar @if, ngClass, @for
import { FormsModule } from '@angular/forms';
import { Movimiento } from '../../Model/movimiento'; // interfaz personalizada


@Component({
  selector: 'app-nuevo-movimiento',
  standalone: true,
  //standalone: true: componente que gestiona sus propias dependencias
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevo-movimiento.html',
  styleUrls: ['./nuevo-movimiento.css']
})
export class NuevoMovimientoComponent {
  @Input() saldoActual: number = 0; //recibe saldo acutal del componente Padre
  @Output() MovimientoValido = new EventEmitter<Movimiento>();
   //El usuario realiza un movimiento, este emisor empaqueta los datos y los envia al padre

  tipo: 'Gasto' | 'Recarga' = 'Gasto';
  monto: number = 0;

  //Creamos un metodo
  enviarMovimiento() {
    if (this.monto > 0) { //validacion para que no sean monto negativos
      const nuevoMovimiento: Movimiento = { //construimos un objeto con nombre nuevoMovimiento
        tipo: this.tipo, 
        monto: this.monto 
      };
      this.MovimientoValido.emit(nuevoMovimiento); // Hijo - Padre
      this.monto = 0; // limpia el campo cuando el hijo hace una accion de enviado con exito
    }
  }
}