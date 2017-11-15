import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiServicesProvider} from "../api-services/api-services";

@Injectable()
export class TrailerServicesProvider {
  constructor(public http:HttpClient, public apiServices: ApiServicesProvider){}

  getList(){
    return new Promise(((resolve, reject) => {
      this.apiServices.getTrailer().toPromise()
        .then((item)=> {
          resolve(item)
        })
        .catch((e)=>console.error(e))
    }))
  }
}
