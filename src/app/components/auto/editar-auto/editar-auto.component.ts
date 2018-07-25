import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { Car } from '../../../models/car';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-editar-auto',
  templateUrl: '../crear-auto/crear-auto.component.html',  //utilizo el mismo form que el crear nuevo auto
  providers: [UserService, CarService]
})
export class EditarAutoComponent implements OnInit {
  public car: Car;
  public page_titulo: string;
  public token;
  public status_car;

  constructor(
      private _userService: UserService,
      private _route: ActivatedRoute,
      private _router: Router,
      private _carService: CarService
  ) { 
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = +params['id'];  //rescata el  id del auto
      this.getCar(id);
    });
  }

  getCar(id) {
      this._carService.getCar(id).subscribe(
        response => {
          if (response.status == 'success') {
            this.car = response.car;
            this.page_titulo = 'Editar el ' + this.car.title;
          } else {
            this._router.navigate(['home']);
          }
        },
        error => {
          console.log(<any>error);
         
        }
      );
    
  }

  nuevoAuto(form) {
    console.log(this.car.id);
      this._carService.update(this.token, this.car, this.car.id).subscribe(
          response => {
            //console.log(response);
            if (response.status == 'success') {
              this.status_car = 'success';
              this.car = response.car;
              this._router.navigate(['/auto', this.car.id])
            } else {
              this.status_car = 'error';
            }
          },
          error => {
            console.log(<any>error);
            this.status_car = 'error';
          }
      );
   
  }


}
