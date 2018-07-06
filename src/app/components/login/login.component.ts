import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    // styleUrls: ['./name.component.scss']
})
export class LoginComponent implements OnInit {
    public title: string;

    constructor(
        // private _route: ActivatedRoute,
        // private _router: Router
    ) {
        this.title = 'Identificate';
    }

    ngOnInit(): void {
        console.log('login.component cargado');
     }
}
