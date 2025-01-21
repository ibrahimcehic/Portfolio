import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface ExperienceItem {
  name: string;
  src: string;
  index?: number;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  imports: [NgOptimizedImage],
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private experienceItems: ExperienceItem[] = [
    { name: 'Javascript', src: './assets/technologies/js.png' },
    { name: 'Typescript', src: './assets/technologies/ts.png' },
    { name: 'Angular', src: './assets/technologies/angular.png' },
    { name: 'HTML', src: './assets/technologies/html.png' },
    { name: 'CSS', src: './assets/technologies/css.png' },
    { name: 'Bootstrap', src: './assets/technologies/bootstrap.png' },
    { name: 'Docker', src: './assets/technologies/docker.png' },
    { name: 'GIT', src: './assets/technologies/git.png' },
    { name: 'GraphQL', src: './assets/technologies/GraphQL.png' },
    { name: 'JasmineKarma', src: './assets/technologies/Jasmine.png' },
    { name: 'NgRX', src: './assets/technologies/ngrx.png' },
    { name: 'RxJs', src: './assets/technologies/rxjs.svg' },
    { name: 'PrimeNG', src: './assets/technologies/primeng.png' },
    { name: 'Firebase', src: './assets/technologies/firebase.png' },
  ];

  // needed to create an infinite-like scroll effect
  get getExperience(): ExperienceItem[] {
    return Array.from({ length: 10 }, (_, i: number) =>
      this.experienceItems.map((item: ExperienceItem, index: number) => ({
        ...item,
        index: i * this.experienceItems.length + index,
      }))
    ).flat();
  }
}
