import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    providers: [UserService]
    // styleUrls: ['./name.component.scss']
})
export class RegisterComponent implements OnInit {
    public title: string;
    public user: User;
    public status: string;

    constructor(
        private _userService: UserService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.title = 'Registrate';
        this.user = new User(1, 'ROLE_USER', '', '', '', '');

    }

    ngOnInit(): void {
        console.log('register.component cargado');
     }

     onSubmit(form) {
        // console.log(this.user);
        // console.log(this._userService.prueba());
         this._userService.register(this.user).subscribe(
             response => {
                // tslint:disable-next-line:triple-equals
                if (response.status == 'success') {
                    this.status = response.status;
                    // resetear el form
                    this.user = new User(1, 'ROLE_USER', '', '', '', '');
                    form.reset();
                } else {
                    this.status = 'error';
                }
             },
             error => {
                 console.log(<any>error);
             }
         );
      }
}
