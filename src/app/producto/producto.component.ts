import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../Home/nav/nav.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  producto: any;


}
