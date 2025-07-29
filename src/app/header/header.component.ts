import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuVisible=false;
  toggleMenu(){
      this.menuVisible = !this.menuVisible;
      
      


   

}

submitForm(form:any) {
  const name = form.value.name;
  const email = form.value.email;
  const message = form.value.message;

  const phone = '919005406351'; // your WhatsApp number
  const text = `Hello Ramesh, my name is ${name}. My email is ${email}. Message: ${message}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}
msgSent(){
  alert('Your message has been sent ,thankyou for contacting')
}}
