import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-home',
  imports: [AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
