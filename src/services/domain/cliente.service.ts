import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { ClienteDTO } from "../../models/cliente.dto";
import { StorageService } from "../storage.services";

@Injectable()
export class ClienteService{

    basepath = ""

    constructor(public http: HttpClient,
                public storage: StorageService,
                public _platform: Platform){
                    
                    if(this._platform.is("cordova")){
                        this.basepath = "http://localhost:8080";
                    }  
        
    }

    findByEmail(email: string) {
    return this.http.get(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`);
    }
    
    getImageFromBucket(id : string) : Observable<any> {

        let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
        
    }
    
    insert(obj: ClienteDTO){
        return this.http.post(this.basepath + '/clientes',
        obj,{
            observe: 'response',
            responseType: 'text'
        }
        );
    }

    findById(id: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/clientes/${id}`);
        }


}