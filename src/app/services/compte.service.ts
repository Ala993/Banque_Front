import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Compte } from '../models/compte.model';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http: HttpClient) { }

  findCompteByCode (codeCompte: string){
    return this.http.get(environment.api+"/compte/"+codeCompte);
  }
  createAccount(type: string, compte: Compte){
    return this.http.post(environment.api+"/compte/"+type, compte)
  }
  findAll(): Observable<any[]>{
    return this.http.get<any[]>(environment.api+"/comptes");
  }
}
