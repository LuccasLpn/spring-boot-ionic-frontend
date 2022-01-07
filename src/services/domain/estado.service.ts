import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import { EstadoDTO } from "../../models/estado.dto";

@Injectable()
export class EstadoService{

    basepath = "/estados"

 constructor(public Http: HttpClient,
            public _platform: Platform){

                if(this._platform.is("cordova")){
                    this.basepath = "http://localhost:8080";
                }  


 }
 
 findAll(): Observable <EstadoDTO []> {
     return this.Http.get<EstadoDTO []>(this.basepath);
 }

}