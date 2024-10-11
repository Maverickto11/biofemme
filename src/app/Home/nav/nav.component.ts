import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
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
}
