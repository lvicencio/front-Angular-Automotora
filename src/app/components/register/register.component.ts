import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    // styleUrls: ['./name.component.scss']
})
export class RegisterComponent implements OnInit {
    public title: string;

    constructor(
        // private _route: ActivatedRoute,
        // private _router: Router
    ) {
        this.title = 'Registrate';
    }

    ngOnInit(): void {
        console.log('register.component cargado');
     }
}
