import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    providers: [UserService]
    // styleUrls: ['./name.component.scss']
})
export class DefaultComponent implements OnInit {
    public title: string;
   

    constructor(
        private _userService: UserService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.title = 'Inicio';
      

    }

    ngOnInit(): void {
        console.log('default.component cargado');
     }

}
