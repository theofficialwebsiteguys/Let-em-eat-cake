import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home', redirectTo: '', pathMatch: 'full' },  // Redirects to /home
    { path: '', component: HomeComponent },
];
