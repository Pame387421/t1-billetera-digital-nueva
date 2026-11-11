import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//CommonModule: necesario para usar @if, ngClass, @for
import { NuevoMovimientoComponent } from '../nuevo-movimiento/nuevo-movimiento'; // Incorporamos al componente Hijo
import { Movimiento } from '../../Model/movimiento'; // interfaz personalizada

@Component({
  selector: 'app-billetera', 
  standalone: true,
  imports: [CommonModule, NuevoMovimientoComponent], //Lista de Modulos
  templateUrl: './billetera.html',
  styleUrls: ['./billetera.css']
})
export class BilleteraComponent {
  saldo: number = 250.00; //Variable para almacenar el dinero 
  movimientos: Movimiento[] = []; // Creamos una variable que sera un arreglo vacio, que almacenara el
                                  // historial de todas las operacions


   //Creamos un Metodo 
   //Este metodo se activira cuando el hijo realice una accion
  registrarMovimiento(nuevo: Movimiento) { // registrarMovimiento recibe a un objeto nuevo de tipo Movimiento
    if (nuevo.tipo === 'Gasto') { //Validamos si es 'Gasto'
      if (nuevo.monto <= this.saldo) { // Con esta condicion afirmamos que el hijo no gaste mas del monto 
        this.saldo -= nuevo.monto; // Restamos el monto actual 
        this.movimientos.unshift(nuevo); // con unshift agregamos que cuando realice una transaccion mas reciente 
                                         // aparezca siempre en la parte superior del historial 
      }
    } else if (nuevo.tipo === 'Recarga') {
      if (nuevo.monto > 0) { // recarga positiva 
        this.saldo += nuevo.monto; // sumamos el monto ingresado con el actual
        this.movimientos.unshift(nuevo); // Añade la recarga al principio del historial de movimientos.
      }
    }
  }
}