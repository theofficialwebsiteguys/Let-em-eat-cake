import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { FeaturesComponent } from '../features/features.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContactComponent,
    FeaturesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @ViewChild('cakeOrderSection') cakeOrderSection!: ElementRef;

  scrollToSection() {
    if (this.cakeOrderSection) {
      this.cakeOrderSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
