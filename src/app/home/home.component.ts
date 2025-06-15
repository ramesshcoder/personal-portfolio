import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  imports: [AboutComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
