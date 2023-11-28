import { Component } from '@angular/core';

@Component({
  selector: 'app-terminos-condiciones-screen',
  templateUrl: './terminos-condiciones-screen.component.html',
  styleUrls: ['./terminos-condiciones-screen.component.scss']
})
export class TerminosCondicionesScreenComponent {

  constructor() { }

  ngOnInit(): void {
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }
}
