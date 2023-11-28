import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-screen',
  templateUrl: './perfil-screen.component.html',
  styleUrls: ['./perfil-screen.component.scss']
})
export class PerfilScreenComponent {

  isMobile: boolean;

  constructor() {
    this.isMobile = this.detectMobile();
  }

  private detectMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
  }
}
