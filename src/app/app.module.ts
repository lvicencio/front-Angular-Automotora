import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './components/default/default.component';
import { CrearAutoComponent } from './components/auto/crear-auto/crear-auto.component';
import { EditarAutoComponent } from './components/auto/editar-auto/editar-auto.component';
import { DetalleAutoComponent } from './components/auto/detalle-auto/detalle-auto.component';


// import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DefaultComponent,
    CrearAutoComponent,
    EditarAutoComponent,
    DetalleAutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
    // UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
