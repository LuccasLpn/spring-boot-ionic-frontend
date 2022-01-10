import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { CidadeDTO } from "../../models/cidade.dto";

@Injectable()
export class CidadeService{


 constructor(public Http: HttpClient,
            public _platform: Platform){


 }
 
 findAll(estado_id: string): Observable <CidadeDTO []> {
     return this.Http.get<CidadeDTO []>(`${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`);
 }

}