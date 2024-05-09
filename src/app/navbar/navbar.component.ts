import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  //constructor(public router: Router) { }

  constructor(public router: Router, private route: ActivatedRoute) { }

  // route(page: string) {
  //   this.router.navigate(['/' + page]);

  // }

}
