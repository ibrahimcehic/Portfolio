import { Component } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';
import { ProjectItemComponent } from './project-item/project-item.component';

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectItemComponent, NgForOf, NgClass],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  protected projects: Project[] = [
    {
      name: 'My Portfolio',
      description:
        "Feel free to check out the code for my portfolio on Github. It's open for exploration, and you're welcome to fork it and create your own version!",
      technologies: [
        'Angular',
        'TypeScript',
        'HTML',
        'SCSS',
        'Bootstrap',
        'GitHub Pages',
        'Github Actions',
      ],
      src: './assets/projects/portfolio.png',
      link: 'https://github.com/ibrahimcehic/Portfolio',
    },
    {
      name: 'School management system',
      description:
        'Managing school including students and staff. Students can overview their subjects and marks. Teachers can manage subjects and marks for students. Dive into the code of this project, built with Angular, TypeScript, HTML, SCSS, Angular Material, to see a simplified version of the process.',
      technologies: [
        'Angular',
        'TypeScript',
        'HTML',
        'SCSS',
        'Angular Material',
        'Firebase',
      ],
      src: './assets/projects/studentManagementSystem.png',
      link: 'https://github.com/ibrahimcehic/student-management-system',
    },
    {
      name: 'Student ranging App by AHP-method',
      description:
        'Ranging students by such a different criteria can be really difficult. In this app it can be done using AHP mathematical method. It includes adding criterias and values for all different criteria.',
      technologies: ['Angular', 'Typescript', 'Scss', 'Ng Bootstrap', 'RxJS'],
      src: './assets/projects/studentsRanging.png',
      link: 'https://github.com/ibrahimcehic/Students-ranging-app-AHP-method',
    },
    {
      name: 'Live Sports',
      description:
        'This projects includes overview of differnet sports and sport persons. It uses live data about sports teams, results, competitions... In this project I used API-s with sport data and displaying it in Angular app.',
      technologies: [
        'Angular',
        'TypeScript',
        'Bootstrap',
        'FontAwesome',
        'RxJS'
      ],
      src: './assets/projects/sports.png',
      link: 'https://github.com/ibrahimcehic/Sports-live-data',
    },
    {
      name: 'Pet rescue',
      description:
        "Idea of Application is about asylum for abandoned animals. User can register and submit a request for pet adoption. Asylum staff will proccess, and they will approve or decline request.",
      technologies: [
        'Java',
        'Jakarta EE',
        'JSF',
        'lombok',
        'sqlite jdbc',
        'Apache Tomcat',
      ],
      src: './assets/projects/petResque.png',
      link: 'https://github.com/ibrahimcehic/PetRescue',
    },
  ];
}
