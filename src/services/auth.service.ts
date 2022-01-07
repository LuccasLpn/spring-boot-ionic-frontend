import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelper } from "angular2-jwt";
import { Platform } from "ionic-angular";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.services";


@Injectable()
export class AuthService{
    basepath = "/login"
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(public http: HttpClient,
                private _platform: Platform,
                public storage : StorageService){

                 if(this._platform.is("cordova")){
                     this.basepath = "http://localhost:8080";
                 }   
    }

    authenticate(creds : CredenciaisDTO){
      return this.http.post(
          this.basepath
            ,creds,
            {
            observe : 'response',
            responseType: 'text'
        });
    }
    successfulllogin(authorizationValue : string){
        let tok = authorizationValue.substring(7);
        let user : LocalUser = {
            token : tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
    }
    logout(){
        this.storage.setLocalUser(null);
    }
}