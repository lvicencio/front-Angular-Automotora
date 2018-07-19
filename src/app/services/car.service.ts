import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { GLOBAL } from './global';
import { Car } from '../models/car';


@Injectable()
export class CarService {
    public url: string;
    
    constructor(
        public _http: HttpClient
    ) {
        this.url = GLOBAL.url;
    }

    prueba() {
        return 'conexion de prueba';
    }

    create(token, car: Car): Observable<any> {
        let json = JSON.stringify(car);
        let params = 'json=' + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                        .set('Authorization', token);

        return this._http.post(this.url + 'cars', params, {headers: headers});
    }

    sigup(user, gettoken = null): Observable<any> {
        if (gettoken != null) {
            user.gettoken = 'true';
        }
        let json = JSON.stringify(user);
        let params = 'json=' + json;

        // tslint:disable-next-line:prefer-const
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url + 'login', params, {headers: headers});
    }


}
