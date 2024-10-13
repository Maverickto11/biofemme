import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-whats-app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './whats-app-modal.component.html',
  styleUrl: './whats-app-modal.component.css'
})
export class WhatsAppModalComponent {
  isModalVisible: boolean = false;

  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  onSubmit(form: any) {
    // Aquí puedes manejar el envío del formulario
    console.log(form.value);
    this.closeModal(); // Cerrar el modal después de enviar
  }
  showTooltip = false;

  showFirstGif: boolean = true;

  onGifLoad(gif: string) {
    if (gif === 'first') {
      setTimeout(() => {
        this.showFirstGif = false; // Oculta el primer GIF
      }, 3000); // Tiempo que el primer GIF se muestra (en milisegundos)
    } else if (gif === 'second') {
      setTimeout(() => {
        this.showFirstGif = true; // Regresa a mostrar el primer GIF
      }, 3000); // Tiempo que el segundo GIF se muestra (en milisegundos)
    }
  }
}

