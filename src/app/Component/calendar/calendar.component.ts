import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  grilleSemaine: Array<string> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday'];
  grilleMois: Array<string> = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  nombreJoursMoisAn: Array<number> = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  today: Date = new Date();
  moisActuel: string = this.grilleMois[(this.today.getMonth())];
  nombreJoursMois: number = this.nombreJoursMoisAn[(this.today.getMonth())];

  tableauNombreJoursMoisEncours!: Array<string>;

  tableauMoisEncrours(nombreJoursMois: number): Array<string> {
    let tab = [''];
    for (let i = 0; i < nombreJoursMois; i++) {
      tab[i] = (i + 1) + '';
    }
    return tab
  }

  ngOnInit(): void {
    this.tableauNombreJoursMoisEncours = this.tableauMoisEncrours(this.nombreJoursMois);
  }
}

