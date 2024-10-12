import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  categorias = [
    { nombre: 'LIMPIEZA', imagen: '/assets/img/Categorías/categoria img 1.jpg', imagenHover: '/assets/img/Categorías/categoria- img hover 1.jpg' },
    { nombre: 'HIDRATACIÓN', imagen: '/assets/img/Categorías/categoria img 2.jpg', imagenHover: '/assets/img/Categorías/categoria img hover 2.jpg' },
    { nombre: 'PROTECCIÓN', imagen: '/assets/img/Categorías/categoria img 3.jpg', imagenHover: '/assets/img/Categorías/categoria img hover 3.jpg' },
    { nombre: 'PROAGE', imagen: '/assets/img/Categorías/categoria img 4.jpg', imagenHover: '/assets/img/Categorías/categoria img hover 4.jpg' },
    { nombre: 'ACNÉ CONTROL', imagen: '/assets/img/Categorías/categoria img 5.jpg' , imagenHover: '/assets/img/Categorías/categoria img hover 5.jpg' }
  ];
}
