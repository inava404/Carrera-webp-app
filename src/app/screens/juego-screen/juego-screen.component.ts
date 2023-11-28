import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego-screen',
  templateUrl: './juego-screen.component.html',
  styleUrls: ['./juego-screen.component.scss']
})
export class JuegoScreenComponent {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }

  public omitir(){
    this.router.navigate(["juegoLive"]);
  }
}
