import { Component } from '@angular/core';

@Component({
  selector: 'app-politica-screen',
  templateUrl: './politica-screen.component.html',
  styleUrls: ['./politica-screen.component.scss']
})
export class PoliticaScreenComponent {

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
