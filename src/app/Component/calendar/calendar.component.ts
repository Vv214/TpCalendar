import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/Service/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

  grilleSemaine!: string[]
  moisActuel!: number
  tableauNombreJoursMoisEncours!: string[]
  nombreJoursMois!: number;
  moisPrecedent!: number;
  moisSuivant!: number;
  moisAAfficher!: number;
  premierJourMois!: number;

  constructor(private calendarService: CalendarService) {
  }

  changeMonth(mois: number): void {
    this.calendarService.changeMonth(mois);
    this.moisPrecedent = this.calendarService.moisPrecedent;
    this.moisSuivant = this.calendarService.moisSuivant;
    this.moisAAfficher = this.calendarService.moisAAfficher;
    this.nombreJoursMois = this.calendarService.nombreJoursMois;
    this.premierJourMois = this.calendarService.premierJourMois;

    this.tableauNombreJoursMoisEncours = this.calendarService.tableauMoisEncrours();
  }

  // affichageJour(){
  // Todo
  // }

  ngOnInit(): void {
    // INIT SERVICE TABLE
    this.calendarService.initValues();
    // INIT COMPONENT ATTRIBUTE
    this.grilleSemaine = this.calendarService.grilleSemaine;
    this.moisActuel = this.calendarService.moisActuel;
    this.nombreJoursMois = this.calendarService.nombreJoursMois;
    this.tableauNombreJoursMoisEncours = this.calendarService.tableauMoisEncrours();
    this.moisPrecedent = this.calendarService.moisPrecedent;
    this.moisSuivant = this.calendarService.moisSuivant;
    this.premierJourMois = this.calendarService.premierJourMois;
    this.moisAAfficher = this.calendarService.moisAAfficher;

  }
}

