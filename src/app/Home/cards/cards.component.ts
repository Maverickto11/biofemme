import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductoComponent } from '../../producto/producto.component';
@Component({  
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, FooterComponent, RouterModule, ProductoComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  constructor(private route: ActivatedRoute) {}

  categorias = [
    { 
        nombre: 'LIMPIEZA', 
        imagen: '/assets/img/Categorías/categoria img 1.jpg', 
        imagenHover: '/assets/img/Categorías/categoria- img hover 1.jpg',
        imagenPequena: '/assets/img/Categorías/categoria-1.jpg' // Nueva propiedad
    },
    { 
        nombre: 'HIDRATACIÓN', 
        imagen: '/assets/img/Categorías/categoria img 2.jpg', 
        imagenHover: '/assets/img/Categorías/categoria img hover 2.jpg',
        imagenPequena: '/assets/img/Categorías/categoria-2.jpg' // Nueva propiedad
    },
    { 
        nombre: 'PROTECCIÓN', 
        imagen: '/assets/img/Categorías/categoria img 3.jpg', 
        imagenHover: '/assets/img/Categorías/categoria img hover 3.jpg',
        imagenPequena: '/assets/img/Categorías/categoria-3.jpg' // Nueva propiedad
    },
    { 
        nombre: 'PROAGE', 
        imagen: '/assets/img/Categorías/categoria img 4.jpg', 
        imagenHover: '/assets/img/Categorías/categoria img hover 4.jpg',
        imagenPequena: '/assets/img/Categorías/categoria-4.jpg' // Nueva propiedad
    },
    { 
        nombre: 'ACNÉ CONTROL', 
        imagen: '/assets/img/Categorías/categoria img 5.jpg', 
        imagenHover: '/assets/img/Categorías/categoria img hover 5.jpg',
        imagenPequena: '/assets/img/Categorías/categoria-5.jpg' // Nueva propiedad
    }
];

  producto: any;

  productos = [
    {
      id: 1,
      imagen: '/assets/img/Producto/Producto1.jpg',
      titulo: 'LIFTING SERUM',
      tituloSub: 'Sérum Tensor',
      descripcion: 'Proage | Todo tipo de piel',
      precio: '$21.57',
    },

    {
      imagen: '/assets/img/Producto/Producto2.jpg',
      titulo: 'SUNSCREEN 50+',
      tituloSub: 'Bloqueador Solar',
      descripcion: 'Protección | Todo tipo de piel',
      precio: '$24.64'
    },
    {
      imagen: '/assets/img/Producto/Producto3.jpg',
      titulo: 'BIO BEAUTY OIL',
      tituloSub: 'Aceite Seco Hidratante',
      descripcion: 'Hidratación | Todo tipo de piel',
      precio: '$16.42'
    },
    {
      imagen: '/assets/img/Producto/Producto4.jpg',
      titulo: 'BIOFEMME MINI KIT',
      tituloSub: 'Mini Sizes',
      descripcion: 'Sets | Piel mixta a grasa',
      precio: '$20.70 ',
      precioAnterior: '$23.00'
    },
    // Agrega más productos según sea necesario
  ];
  getProductos() {
    return this.productos;
  }

  isSmallScreen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isSmallScreen = window.innerWidth < 768; // Cambia 768 según tu necesidad
  }

  ngOnInit() {
    this.isSmallScreen = window.innerWidth < 768; // Inicializa el estado en ngOnInit
  }
}
