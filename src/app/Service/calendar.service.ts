import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  grilleSemaine!: Array<string>;
  grilleMois: Array<string>;
  nombreJoursMoisAn: Array<number>;
  today: Date;
  moisActuel: number;
  nombreJoursMois: number;
  moisPrecedent: number;
  moisSuivant: number;
  premierJourMois: number;
  moisAAfficher: number;
  year: number;

  constructor() {
    this.grilleSemaine = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday', 'Sunday'];
    this.grilleMois = ['January', 'February', 'March', 'April', 'May',
      'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.nombreJoursMoisAn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.today = new Date();
    this.moisActuel = this.today.getMonth();
    this.moisAAfficher = this.moisActuel;
    this.year = this.today.getFullYear();
    this.premierJourMois = new Date(this.year, this.moisAAfficher).getDay()
    this.nombreJoursMois = this.nombreJoursMoisAn[this.moisAAfficher + 1];
    this.moisPrecedent = this.moisActuel - 1;
    this.moisSuivant = this.moisActuel + 1;

  }

  initValues() {
    this.today = new Date();
    this.moisActuel = this.today.getMonth();
    this.nombreJoursMois = this.nombreJoursMoisAn[this.moisAAfficher];
  }

  tableauMoisEncrours(): Array<string> {
    let tab = [''];
    for (let i = 0; i < this.nombreJoursMois; i++) {
      tab[i] = (i + 1) + '';
    }
    return tab;
  }

  changeMonth(mois: number): void {
    if (mois === -1) {
      this.year = this.year - 1;
      this.moisAAfficher = 11;
      this.moisPrecedent = 10;
      this.moisSuivant = 0;
    } else if (mois === 12) {
      this.year = this.year + 1;
      this.moisAAfficher = mois;
      this.moisPrecedent = 10;
      this.moisSuivant = 0;
    } else {
      this.moisAAfficher = mois;
      this.moisPrecedent = mois - 1;
      this.moisSuivant = mois + 1;
    }
    this.nombreJoursMois = this.nombreJoursMoisAn[this.moisAAfficher];
    this.premierJourMois = new Date(this.year, this.moisAAfficher + 1).getDay()

    console.log(mois, this.moisAAfficher, this.moisPrecedent, this.moisSuivant);
  }
}
