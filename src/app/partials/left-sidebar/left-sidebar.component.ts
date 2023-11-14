import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  public isLogin: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public cerrar_drawer(){

  }

  public iniciarSesion(){

  }

  public goInicio(){
    
  }

  public goBasesPromocion(){

  }

  public goTiendasParticipantes(){

  }

  public logout(){

  }
}