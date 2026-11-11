import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BilleteraComponent } from './components/billetera/billetera';

@Component({
  imports: [RouterOutlet, BilleteraComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 
}
