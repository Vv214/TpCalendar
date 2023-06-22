import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  grilleSemaine!: Array<string>;
  grilleMois: Array<string>;
  nombreJoursMoisAn: Array<number>;
  today: Date;
  moisActuel: string;
  nombreJoursMois: number;

  constructor() {
    this.grilleSemaine = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday', 'Sunday'];
    this.grilleMois = ['January', 'February', 'March', 'April', 'May',
      'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.nombreJoursMoisAn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.today = new Date();
    this.moisActuel = this.grilleMois[(this.today.getMonth())];
    this.nombreJoursMois = this.nombreJoursMoisAn[(this.today.getMonth())];
  }

  initValues() {
    this.today = new Date();
    this.moisActuel = this.grilleMois[(this.today.getMonth())];
    this.nombreJoursMois = this.nombreJoursMoisAn[(this.today.getMonth())];
  }

  tableauMoisEncrours(): Array<string> {
    let tab = [''];
    for (let i = 0; i < this.nombreJoursMois; i++) {
      tab[i] = (i + 1) + '';
    }
    return tab;
  }
}
