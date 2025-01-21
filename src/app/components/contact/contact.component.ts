import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goToLinkedin() {
    window.open('https://ba.linkedin.com/in/ibrahim-cehic', '_blank');
  }

  get email(): string {
    return 'c.ibrahim.vkl@hotmail.com';
  }
}
