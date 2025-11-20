import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolioData } from '../../data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = portfolioData.projects;
}
