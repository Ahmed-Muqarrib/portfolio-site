import { Component } from '@angular/core';
import { portfolioData } from '../../data';
import { Particles } from '../particles/particles';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Particles],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  data = portfolioData.personal;
}
