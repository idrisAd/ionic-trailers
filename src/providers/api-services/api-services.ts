import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_BASE_URL: string = 'http://localhost:8080/';
const API_USERS: string = 'trailers/';


@Injectable()
export class ApiServicesProvider{
  constructor(public http:HttpClient){}

  getTrailer() {
    return this.http.get(`${API_BASE_URL}${API_USERS}`);
  }

  addTrailer(trailer){
    return this.http.post(`${API_BASE_URL}${API_USERS}`, trailer);
  }
}
