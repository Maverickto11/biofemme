import { Component, OnInit } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carousel-principal',
  standalone: true,
  imports: [CardsComponent, RouterModule],
  templateUrl: './carousel-principal.component.html',
  styleUrl: './carousel-principal.component.css'
})
export class CarouselPrincipalComponent implements OnInit {
  images = [
    'assets/img/Carousel/Carousel-1.jpg',
    'assets/img/Carousel/Carousel-2.jpg',
    'assets/img/Carousel/Carousel-3.jpg',
    'assets/img/Carousel/Carousel-4.jpg',
    'assets/img/Carousel/Carousel-5.jpg',

  ];

  currentIndex = 0;
  interval: any;

  ngOnInit(): void {
    // Iniciar el cambio automático de imágenes cada 3 segundos
    this.interval = setInterval(() => {
      this.next();
    }, 3000);
  }
  
  ngOnDestroy(): void {
    // Limpiar el intervalo cuando el componente se destruya
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}

