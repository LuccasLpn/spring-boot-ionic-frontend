import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { EstadoDTO } from "../../models/estado.dto";

@Injectable()
export class EstadoService{


 constructor(public Http: HttpClient,
            public _platform: Platform){

 }
 
 findAll(): Observable <EstadoDTO []> {
     return this.Http.get<EstadoDTO []>(`${API_CONFIG.baseUrl}/estados`);
 }

}