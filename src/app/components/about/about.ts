import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolioData } from '../../data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  skills = portfolioData.skills;
  education = portfolioData.education;
}
