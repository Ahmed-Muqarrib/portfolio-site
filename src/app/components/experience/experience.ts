import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolioData } from '../../data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experience = portfolioData.experience;
}
