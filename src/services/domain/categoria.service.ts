import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { CategoriaDTO } from "../../models/categoria.dto";

@Injectable()
export class CategoriaService{



 constructor(public Http: HttpClient,
            public _platform: Platform){


 }
 
 findAll(): Observable <CategoriaDTO []> {
     return this.Http.get<CategoriaDTO []>(`${API_CONFIG.baseUrl}/categorias`);
 }

}