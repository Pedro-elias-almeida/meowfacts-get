import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http:HttpClient) { }

  listFacts(){

    return this.http.get("https://meowfacts.herokuapp.com/")
  }
}
