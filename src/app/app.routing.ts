import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './components/default/default.component';
import { CrearAutoComponent } from './components/auto/crear-auto/crear-auto.component';
import { EditarAutoComponent } from './components/auto/editar-auto/editar-auto.component';
import { DetalleAutoComponent } from './components/auto/detalle-auto/detalle-auto.component';


const appRoutes: Routes = [
    { path: '', component: DefaultComponent },
    { path: 'home', component: DefaultComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout/:sure', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'crear-auto', component: CrearAutoComponent },
    { path: 'editar-auto/:id', component: EditarAutoComponent },
    { path: 'auto/:id', component: DetalleAutoComponent },
    { path: '**', component: DefaultComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

