import { Component } from '@angular/core';
import { portfolioData } from '../../data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  data = portfolioData.personal;
}
