import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { Car } from '../../../models/car';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-detalle-auto',
  templateUrl: './detalle-auto.component.html',
  styleUrls: ['./detalle-auto.component.css'],
  providers: [UserService, CarService]
})
export class DetalleAutoComponent implements OnInit {
  public car: Car;

    constructor(
      private _userService: UserService,
      private _route: ActivatedRoute,
      private _router: Router,
      private _carService: CarService
    ) {
          
    }

  ngOnInit() {
    this.getCar();
  }

  getCar() {
    this._route.params.subscribe(params => {
      let id = +params['id'];  //rescata el  id del auto

      this._carService.getCar(id).subscribe(
        response => {
          if (response.status == 'success') {
            this.car = response.car;
          } else {
            this._router.navigate(['home']);
          }
        },
        error => {
          console.log(<any>error);
          
        }
      );
    });
  }
  
}
