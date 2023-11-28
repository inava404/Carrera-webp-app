import { Component } from '@angular/core';

@Component({
  selector: 'app-terminos-condiciones-screen',
  templateUrl: './terminos-condiciones-screen.component.html',
  styleUrls: ['./terminos-condiciones-screen.component.scss']
})
export class TerminosCondicionesScreenComponent {

  isMobile: boolean;

  constructor() {
    this.isMobile = this.detectMobile();
  }

  private detectMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
  }
}
