import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';


@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    providers: [UserService, CarService]
    // styleUrls: ['./name.component.scss']
})
export class DefaultComponent implements OnInit {
    public title: string;
    public cars: Array<Car>;
    public token;
   

    constructor(
        private _userService: UserService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _carService: CarService
    ) {
        this.title = 'Inicio';
        this.token = this._userService.getToken();     

    }

    ngOnInit(): void {
        console.log('default.component cargado');
        this.getCars();
     }

     getCars(){
        this._carService.getCars().subscribe(
            response => {
                if (response.status == 'success') {
                    this.cars = response.cars;
                }
                console.log(response);
                
            }, 
            error => {
                console.log(<any>error);
                
            }
        );
     }

     deleteCar(id){
        this._carService.delete(this.token, id).subscribe(
            response => {
                this.getCars();
            },
            error => {
                console.log(<any>error);
                
            }
        );
     }
}
