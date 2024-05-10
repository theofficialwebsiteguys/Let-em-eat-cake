import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WeddingsComponent } from './weddings/weddings.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirects to /home
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'weddings', component: WeddingsComponent },
    { path: 'gallery', component: GalleryComponent },
];
