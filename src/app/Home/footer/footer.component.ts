import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WhatsAppModalComponent } from "../../whats-app-modal/whats-app-modal.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, WhatsAppModalComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isFormVisible: boolean = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  
}
