import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isModalVisible = false;
  private hideTimer: any;

  showModal() {
    this.isModalVisible = true;
    this.resetTimer();
  }

  hideModal() {
    this.startHideTimer();
  }

  startHideTimer() {
    this.hideTimer = setTimeout(() => {
      this.isModalVisible = false;
    }, 2000); // Cambia el tiempo aquí si deseas más o menos tiempo
  }

  resetTimer() {
    clearTimeout(this.hideTimer);
    this.hideTimer = null;
  }
  closeOnScroll(event: WheelEvent) {
    if (event.deltaY > 0) {
      this.isModalVisible = false; // Cierra el modal si se desplaza hacia abajo
    }
  }
  
}
