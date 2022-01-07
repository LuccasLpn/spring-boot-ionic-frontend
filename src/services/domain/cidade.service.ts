import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import { CidadeDTO } from "../../models/cidade.dto";

@Injectable()
export class CidadeService{

    basepath = ""

 constructor(public Http: HttpClient,
            public _platform: Platform){

                if(this._platform.is("cordova")){
                    this.basepath = "http://localhost:8080";
                }  


 }
 
 findAll(estado_id: string): Observable <CidadeDTO []> {
     return this.Http.get<CidadeDTO []>(this.basepath +`/estados/${estado_id}/cidades`);
 }

}