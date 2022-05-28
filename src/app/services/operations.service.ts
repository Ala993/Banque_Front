import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private http: HttpClient) { }

  versement(montant: number,codeEmp: number,code: any): Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("montant",montant);
    queryParams = queryParams.append("codeEmp",codeEmp);
    queryParams = queryParams.append("code",code);
    return this.http.put(environment.api+"/versement?montant="+montant+"&codeEmp="+codeEmp+"&code="+code, null);
  }

  
  retrait(montant: number,codeEmp: number,code: any): Observable<any>{
    return this.http.put(environment.api+"/retrait?montant="+montant+"&codeEmp="+codeEmp+"&code="+code, null);
  }

  findAllOperations(codeCompte: any): Observable<any[]>{
    return this.http.get<any[]>(environment.api+"/operations/"+codeCompte);
  }
}
