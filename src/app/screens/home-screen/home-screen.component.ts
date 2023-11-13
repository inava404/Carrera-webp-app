import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  public name_user: string = "Diego Nava";
  public isLoading: boolean = false;
  //Form dinámico de campos de texto
  public inputsCodigo : FormGroup;
  public tiendas: any[] = [{value: "liverpool", nombre: "Liverpool"}, {value:"devlyn", nombre: "Ópticas Devlyn"}];
  public selectedValue: string = "";

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initInputsCodigo();
  }

  initInputsCodigo(){
    this.inputsCodigo = this.fb.group({
      listaInputs: this.fb.array([this.fb.group({valor:'', extra: false})])
    });

    for (let i = 0; i < 7; i++) {
      const control_1 = <FormArray>this.inputsCodigo.controls['listaInputs'];
      control_1.push(this.fb.group({valor:'', extra: false}));
    }
  }

  get getCamposInputs(){
    return this.inputsCodigo.get('listaInputs') as FormArray;
  }

  public saberMas(){

  }

  public isMobile(tipo: number){
    switch(tipo){
      case 1:
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
          return "style-mobile";
        }else{
          return "interior-codigos";
        }
        break;
      case 2:
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
          return "style-mobile";
        }else{
          return "interior-codigos-registrados";
        }
        break;
    }
  }
}