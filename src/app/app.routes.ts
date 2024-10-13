import { Routes } from '@angular/router';
import { CarouselPrincipalComponent } from './Home/carousel-principal/carousel-principal.component';
import { ProductoComponent } from './producto/producto.component';

export const routes: Routes = [
    { path: '', component: CarouselPrincipalComponent },
    { path: 'home', component: CarouselPrincipalComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'producto', component: ProductoComponent },



];