import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
faqs=false
  showFaqs(){
    this.faqs=true;

  }
  closeFaqs(){
    this.faqs=false
  }
  policy=false;
  closePrivacy(){
    this.policy=false
  }
  openPrivacy(){
    this.policy=true;
  }
}
