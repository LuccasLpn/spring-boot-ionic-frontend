import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { CredenciaisDTO } from "../models/credenciais.dto";

@Injectable()
export class AuthService{
    basepath = "/login"

    constructor(public http: HttpClient,
                private _platform: Platform){

                 if(this._platform.is("cordova")){
                     this.basepath = "http://localhost:8080";
                 }   
    }

    authenticate(creds : CredenciaisDTO){
      return this.http.post(
          this.basepath + "/login"
            ,creds,
            {
            observe : 'response',
            responseType: 'text'
        });
    }
}