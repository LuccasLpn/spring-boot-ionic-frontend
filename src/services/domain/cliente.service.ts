import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { ClienteDTO } from "../../models/cliente.dto";
import { StorageService } from "../storage.services";

@Injectable()
export class ClienteService{

    basepath = "/clientes/email?value="

    constructor(public http: HttpClient,
                public storage: StorageService,
                public _platform: Platform){
                    
                    if(this._platform.is("cordova")){
                        this.basepath = "http://localhost:8080";
                    }  
        
    }

    findByEmail(email: string): Observable<ClienteDTO>{
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token});
        return this.http.get<ClienteDTO>(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`,
        {'headers': authHeader});

    }
    
    getImageFromBucket(id : string) : Observable<any> {

        let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
        
    }


}