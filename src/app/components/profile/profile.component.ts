import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  openResume() {
    window.open("./assets/SebastianoFazzino.pdf");
  }

  goToLinkedin() {
    window.open('https://ba.linkedin.com/in/ibrahim-cehic', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/ibrahimcehic', '_blank');
  }
}
