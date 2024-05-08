import { Component, NgModule } from '@angular/core';
import { FeaturesComponent } from '../features/features.component';

import { ContactComponent } from '../contact/contact.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { GalleryComponent } from '../gallery/gallery.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContactComponent,
    TestimonialsComponent,
    FeaturesComponent,
    GalleryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
