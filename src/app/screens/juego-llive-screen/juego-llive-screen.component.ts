import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego-llive-screen',
  templateUrl: './juego-llive-screen.component.html',
  styleUrls: ['./juego-llive-screen.component.scss']
})
export class JuegoLliveScreenComponent {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  public goJuegoTerminado(){
    this.router.navigate(["juegoTerminado"]);
  }
}
