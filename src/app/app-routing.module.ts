import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component'; 
import { JuegoTerminadoScreenComponent } from './screens/juego-terminado-screen/juego-terminado-screen.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { InstruccionesScreenComponent } from './screens/instrucciones-screen/instrucciones-screen.component';
import { JuegoScreenComponent } from './screens/juego-screen/juego-screen.component';
import { PoliticaScreenComponent } from './screens/politica-screen/politica-screen.component';
import { TerminosCondicionesScreenComponent } from './screens/terminos-condiciones-screen/terminos-condiciones-screen.component';
import { JuegoLliveScreenComponent } from './screens/juego-llive-screen/juego-llive-screen.component';
import { PerfilScreenComponent } from './screens/perfil-screen/perfil-screen.component';


const routes: Routes = [
  { path: '', component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full' },
  { path: 'juego terminado', component: JuegoTerminadoScreenComponent, pathMatch: 'full' },
  { path: 'bases-promocion', component: BasesPromocionScreenComponent, pathMatch: 'full' },
  { path: 'instrucciones', component: InstruccionesScreenComponent, pathMatch: 'full'},
  { path: 'juego', component: JuegoScreenComponent, pathMatch: 'full'},
  { path: 'politicas', component: PoliticaScreenComponent, pathMatch: 'full'},
  { path: 'terminos', component: TerminosCondicionesScreenComponent, pathMatch: 'full'},
  { path: 'juegoLive', component: JuegoLliveScreenComponent, pathMatch: 'full'},
  { path: 'juegoTerminado', component: JuegoTerminadoScreenComponent, pathMatch: 'full'},
  { path: 'perfil', component: PerfilScreenComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
