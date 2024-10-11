import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-principal',
  standalone: true,
  imports: [],
  templateUrl: './carousel-principal.component.html',
  styleUrl: './carousel-principal.component.css'
})
export class CarouselPrincipalComponent {
  images = [
    'assets/img/Carousel/Carousel-1.jpg',
    'assets/img/Carousel/Carousel-2.jpg',
    'assets/img/Carousel/Carousel-3.jpg',
    'assets/img/Carousel/Carousel-4.jpg',
    'assets/img/Carousel/Carousel-5.jpg',

  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}

