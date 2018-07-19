import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { CarService } from '../../../services/car.service';

import { Car } from '../../../models/car';



@Component({
  selector: 'app-crear-auto',
  templateUrl: './crear-auto.component.html',
  styleUrls: ['./crear-auto.component.css'],
  providers: [UserService, CarService]
})
export class CrearAutoComponent implements OnInit {

  public page_titulo: string;
  public identity;
  public token;
  public car: Car;
  public status_car:string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _carService: CarService
  ) 
  {
    this.page_titulo = 'Crear Nuevo Vehiculo';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
   }

  ngOnInit() {
    if (this.identity == null) {
      this._router.navigate(["/login"]);
    } else {
      //crear auto
      this.car = new Car(1, '', '', 1, '', null, null);
    }
  }

  nuevoAuto(form){
    // console.log(this.car);
    // console.log(this._carService.prueba());
    this._carService.create(this.token, this.car).subscribe(
      response => {
          
          if (response.status == 'success') {
            this.car = response.car;
            this.status_car = 'success';
            this._router.navigate(['/home']);
          } else {
            this.status_car = 'error';
          }
          console.log(response);
      }, error => {
          console.log(<any>error);
          this.status_car = 'error';
      }
    );
  }

}
