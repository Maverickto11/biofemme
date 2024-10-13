import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./Home/nav/nav.component";
import { CarouselPrincipalComponent } from "./Home/carousel-principal/carousel-principal.component";
import { FooterComponent } from "./Home/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, CarouselPrincipalComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'biofemme';
}
