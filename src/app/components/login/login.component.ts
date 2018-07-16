import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';




@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [UserService]
    // styleUrls: ['./name.component.scss']
})
export class LoginComponent implements OnInit {
    public title: string;
    public user: User;
    public token;
    public identity;

    constructor(
        private _userService: UserService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.title = 'Identificate';
        this.user = new User(1, 'ROLE_USER', '', '', '', '');
    }

    ngOnInit() {
        console.log('login.component cargado');
        // let user = this._userService.getIdentity();
        // console.log(user.name);
        this.logout();
     }

     onSubmit(form) {
        console.log(this.user);
        this._userService.sigup(this.user).subscribe(
            response => {
                // token de autentificación
                    this.token = response;
                    localStorage.setItem('token', this.token);
                
                // rescate de datos del usuario
                    this._userService.sigup(this.user, true).subscribe(
                        // tslint:disable-next-line:no-shadowed-variable
                        response => {
                            this.identity = response;
                            localStorage.setItem('identity', JSON.stringify(this.identity));
                        },
                        error => {
                            console.log(<any>error);
                        }
                    );
            },
            // tslint:disable-next-line:no-shadowed-variable
            error => {
                console.log(<any>error);
            }
        );
     }

     logout(){
         this._route.params.subscribe(params => {
             let logout = +params['sure'];

             if (logout == 1) {
                 localStorage.removeItem('identity');
                 localStorage.removeItem('token');

                 this.identity = null;
                 this.token = null;

                 this._router.navigate(['home']);
             }
         });
     }
}
