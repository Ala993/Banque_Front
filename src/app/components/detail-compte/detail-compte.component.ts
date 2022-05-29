import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compte } from 'src/app/models/compte.model';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-detail-compte',
  templateUrl: './detail-compte.component.html',
  styleUrls: ['./detail-compte.component.scss']
})
export class DetailCompteComponent implements OnInit {
  compte = new Compte();
  typeCompte: string;
  constructor(
    private compteService: CompteService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.compte.client = {}
  }
  save(){
    console.log(this.compte);
    //@ts-ignore
    this.typeCompte = this.compte.type
      this.compteService.createAccount(this.typeCompte, this.compte).subscribe(res => {
        this.router.navigate(["/comptes"])
      })
  }
  cancel(){
    this.router.navigate(["/comptes"])
  }

}
