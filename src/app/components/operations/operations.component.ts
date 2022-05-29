import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Compte } from 'src/app/models/compte.model';
import { Operation } from 'src/app/models/operation.model';
import { CompteService } from 'src/app/services/compte.service';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {
  codeCompte: string;
  compte: Compte;
  typeOperation: string;
  montant: number; 
  operations: Operation[];
  constructor(private compteService: CompteService,
    private toastr: ToastrService,
    private operationsService: OperationsService
    ) { }

  ngOnInit(): void {

  }
  findCompte (){
    if(this.codeCompte){
      this.compteService.findCompteByCode(this.codeCompte).subscribe(res => {
        this.compte = res;
        this.findAllOperations();
      }, error => {
        this.toastr.error("Aucun compte trouvé")
      })
    }

  }
  executOperation(){
    if(this.montant){
      if(this.typeOperation === "versement"){
        this.operationsService.versement(this.montant, 1, this.compte.codeCompte).subscribe(res => {
          if(res){
            this.toastr.success("Operation faite avec succès")
            this.findCompte();
          }
          else{
            this.toastr.error("Operation échouée")
          }
          this.montant = 0;
        })
      }
      else{
        this.operationsService.retrait(this.montant, 1,this.compte.codeCompte).subscribe(res => {
          if(res){
            this.toastr.success("Operation faite avec succès")
            this.findCompte();
          }
          else{
            this.toastr.error("Operation échouée")
          }
          this.montant = 0;
        })
      }
    }else{
      this.toastr.info("le montant est obligatoire")
    }

  }
  findAllOperations(){
    this.operationsService.findAllOperations(this.compte.codeCompte).subscribe(res => {
      this.operations = res;
    })
  }
}
