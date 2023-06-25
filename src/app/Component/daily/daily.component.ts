import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
  @Input()
  isAdmin: boolean = false;
  creneaux: number[] = [];

  jour!: string;
  mois!: string;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.jour = this.route.snapshot.queryParams['id'];
    this.mois = this.route.snapshot.queryParams['mois'];

    for (let i = 8; i <= 18; i++) {
      this.creneaux.push(i);
    }
  }

  affichageJour(id: string, mois: string) {
    this.router.navigate(['/jour'], { queryParams: { id: id, mois: mois } });
  }

  formAppel(jour: string, mois: string, heure: number): void {
    this.router.navigate(['/form'], { queryParams: { id: jour, mois: mois, heure: heure } });
  }
}
