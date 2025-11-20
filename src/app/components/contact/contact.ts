import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolioData } from '../../data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  data = portfolioData.personal;
}
