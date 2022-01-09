import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import { CategoriaDTO } from "../../models/categoria.dto";

@Injectable()
export class CategoriaService{

    basepath = "/categorias"

 constructor(public Http: HttpClient,
            public _platform: Platform){

                if(this._platform.is("cordova")){
                    this.basepath = "http://localhost:8080";
                }  


 }
 
 findAll(): Observable <CategoriaDTO []> {
     return this.Http.get<CategoriaDTO []>(this.basepath);
 }

}