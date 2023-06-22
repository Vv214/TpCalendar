import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/Service/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

  grilleSemaine!: string[]
  moisActuel!: string
  nombreJoursMois!: number
  tableauNombreJoursMoisEncours!: string[]

  constructor(private calendarService: CalendarService) {
  }

  ngOnInit(): void {
    // INIT SERVICE TABLE
    this.calendarService.initValues();
    // INIT COMPONENT ATTRIBUTE
    this.grilleSemaine = this.calendarService.grilleSemaine;
    this.moisActuel = this.calendarService.moisActuel;
    this.nombreJoursMois = this.calendarService.nombreJoursMois;
    this.tableauNombreJoursMoisEncours = this.calendarService.tableauMoisEncrours();
  }
}

