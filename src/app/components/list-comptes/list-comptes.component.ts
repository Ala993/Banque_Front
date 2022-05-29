import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compte } from 'src/app/models/compte.model';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-list-comptes',
  templateUrl: './list-comptes.component.html',
  styleUrls: ['./list-comptes.component.scss']
})
export class ListComptesComponent implements OnInit {
  comptes: Compte[]
  constructor(private compteService: CompteService, private router: Router) { }

  ngOnInit(): void {
    this.compteService.findAll().subscribe(res => {
      this.comptes =res;
    })
  }
  goToCreatePage(){
    this.router.navigate(["/detail-compte"])
  }
}
