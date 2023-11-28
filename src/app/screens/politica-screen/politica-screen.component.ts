import { Component } from '@angular/core';

@Component({
  selector: 'app-politica-screen',
  templateUrl: './politica-screen.component.html',
  styleUrls: ['./politica-screen.component.scss']
})
export class PoliticaScreenComponent {

  isMobile: boolean;

  constructor() {
    this.isMobile = this.detectMobile();
  }

  private detectMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
  }
}
