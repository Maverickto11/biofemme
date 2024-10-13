import { Component, Input, OnInit } from '@angular/core';
import { NavComponent } from "../Home/nav/nav.component";
import { ActivatedRoute } from '@angular/router';
import { CardsComponent } from '../Home/cards/cards.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [NavComponent, CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  isContentVisible: { [key: string]: boolean } = {
    employment: false,
    ingredients: false
  };

  toggleContent(section: string) {
    this.isContentVisible[section] = !this.isContentVisible[section];
  }

  productos = [
    {
      id: 1,
      imagen: '/assets/img/Producto/producto5.jpg',
      titulo: 'EYE MAKEUP REMOVER',
      tituloSub: 'Desmaquillante Bifásico de Ojos',
      descripcion: 'Limpieza | Todo tipo de piel',
      precio: '$17.46',
    },

    {
      imagen: '/assets/img/Producto/producto6.jpg',
      titulo: 'TONIQUE REVITALISANT',
      tituloSub: 'Tónico Revitalizante',
      descripcion: 'Limpieza | Todo tipo de piel',
      precio: '$18.16'
    },
    {
      imagen: '/assets/img/Producto/Producto3.jpg',
      titulo: 'SUNSCREEN 50+',
      tituloSub: 'Bloqueador Solar',
      descripcion: 'Protección | Todo tipo de piel',
      precio: '$24.64'
    },
    {
      imagen: '/assets/img/Producto/Producto4.jpg',
      titulo: 'COLOUR CRÈME SOLAIRE',
      tituloSub: 'Bloqueador Hidratante con Color',
      descripcion: 'Protección | Todo tipo de piel',
      precio: '$28.75 ',
      precioAnterior: ''
    },
    // Agrega más productos según sea necesario
  ];
}
