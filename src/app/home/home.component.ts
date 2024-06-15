import { Component, NgModule } from '@angular/core';
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


}
