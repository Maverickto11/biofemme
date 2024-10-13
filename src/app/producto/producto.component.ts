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
}
