import { Component, ElementRef, HostListener, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

@Component({
  selector: 'app-particles',
  standalone: true,
  templateUrl: './particles.html',
  styleUrl: './particles.scss',
  host: {
    class: 'absolute inset-0 pointer-events-none z-0'
  }
})
export class Particles implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId: number = 0;
  private mouse = { x: -1000, y: -1000 };

  private particleCount = 60;
  private connectionDistance = 150;
  private mouseDistance = 200;
  
  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.initCanvas();
    this.createParticles();
    this.animate();
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.initCanvas();
    this.createParticles();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.canvasRef) return;
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.mouse.x = event.clientX - rect.left;
    this.mouse.y = event.clientY - rect.top;
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    
    // Handle High DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    this.ctx.scale(dpr, dpr);
    
    // Adjust particle count based on screen width (rect.width is CSS pixels)
    if (rect.width < 768) {
      this.particleCount = 30;
      this.connectionDistance = 100;
    } else {
      this.particleCount = 60;
      this.connectionDistance = 150;
    }
  }

  private createParticles() {
    this.particles = [];
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3, // Slower, smoother movement
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5
      });
    }
  }

  private animate() {
    this.ngZone.runOutsideAngular(() => {
      const loop = () => {
        this.draw();
        this.update();
        this.animationId = requestAnimationFrame(loop);
      };
      loop();
    });
  }

  private draw() {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    this.ctx.clearRect(0, 0, width, height);
    
    this.ctx.lineWidth = 0.5;
    
    for (let i = 0; i < this.particles.length; i++) {
      const p1 = this.particles[i];

      // Connect to other particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance) {
          const opacity = 1 - (distance / this.connectionDistance);
          this.ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.15})`; // Cyan
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }

      // Connect to mouse
      const dxMouse = p1.x - this.mouse.x;
      const dyMouse = p1.y - this.mouse.y;
      const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

      if (distMouse < this.mouseDistance) {
        const opacity = 1 - (distMouse / this.mouseDistance);
        this.ctx.strokeStyle = `rgba(129, 140, 248, ${opacity * 0.3})`; // Indigo
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(this.mouse.x, this.mouse.y);
        this.ctx.stroke();
      }

      this.ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
      this.ctx.beginPath();
      this.ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  private update() {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    });
  }
}
