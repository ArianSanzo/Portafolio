import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { HeaderComponent } from './portafolio/header/header.component';
import { BannerComponent } from './portafolio/header/banner/banner.component';
import { LoginComponent } from './portafolio/header/login/login.component';
import { LogosComponent } from './portafolio/header/logos/logos.component';
import { RedesComponent } from './portafolio/header/redes/redes.component';
import { AcercaDeComponent } from './portafolio/acerca-de/acerca-de.component';
import { FotoComponent } from './portafolio/acerca-de/foto/foto.component';
import { InformacionComponent } from './portafolio/acerca-de/informacion/informacion.component';
import { EducacionComponent } from './portafolio/educacion/educacion.component';
import { ExperienciaComponent } from './portafolio/experiencia/experiencia.component';
import { HabilidadesComponent } from './portafolio/habilidades/habilidades.component';
import { ProyectosComponent } from './portafolio/proyectos/proyectos.component';
import { EstablecimientoComponent } from './portafolio/educacion/establecimiento/establecimiento.component';
import { TrabajoComponent } from './portafolio/experiencia/trabajo/trabajo.component';
import { ProyectoComponent } from './portafolio/proyectos/proyecto/proyecto.component';
import { HabilidadComponent } from './portafolio/habilidades/habilidad/habilidad.component';
import { BotonAgregarComponent } from './portafolio/componentes/boton-agregar/boton-agregar.component';



@NgModule({
  declarations: [
    PortafolioComponent,
    HeaderComponent,
    BannerComponent,
    LoginComponent,
    LogosComponent,
    RedesComponent,
    AcercaDeComponent,
    FotoComponent,
    InformacionComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    EstablecimientoComponent,
    TrabajoComponent,
    ProyectoComponent,
    HabilidadComponent,
    BotonAgregarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PortafolioComponent
  ]
})
export class VistaModule { }
