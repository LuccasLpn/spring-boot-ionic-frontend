import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { API_CONFIG } from "../../config/api.config";
import { PedidoDTO } from "../../models/pedido.dto";

@Injectable()
export class PedidoService{

    basepath = ""

    constructor(public Http: HttpClient,
        public _platform: Platform){

            if(this._platform.is("cordova")){
                this.basepath = "http://localhost:8080";
            }  
    
   

}
    insert(obj: PedidoDTO){
        return this.Http.post(
            `${API_CONFIG.baseUrl}/pedidos`,
            obj,{
                observe : 'response',
                responseType: 'text'
            }
        );
    }
}