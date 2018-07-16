import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './components/default/default.component';

const appRoutes: Routes = [
    { path: '', component: DefaultComponent },
    { path: 'home', component: DefaultComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout/:sure', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: '**', component: DefaultComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

