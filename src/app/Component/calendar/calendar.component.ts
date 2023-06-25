import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/Service/calendar.service';
import { DailyComponent } from '../daily/daily.component';
import { Router } from '@angular/router';

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
  annee!: number;
  grilleMois!: string[];
  nombreJoursMoisAn!: Array<number>;


  constructor(private calendarService: CalendarService, private router: Router) {
  }

  changeMoisPrecedent(mois: number, annee: number): void {
    this.calendarService.changeMoisPrecedent(mois, annee);
    this.moisPrecedent = this.calendarService.moisPrecedent;
    this.moisSuivant = this.calendarService.moisSuivant;
    this.moisAAfficher = this.calendarService.moisAAfficher;
    this.nombreJoursMois = this.calendarService.nombreJoursMois;
    this.premierJourMois = this.calendarService.premierJourMois;
    this.tableauNombreJoursMoisEncours = this.calendarService.tableauMoisEncrours();
    this.annee = this.calendarService.annee;
    this.nombreJoursMoisAn = this.calendarService.nombreJoursMoisAn;
  }

  changeMoisSuivant(mois: number, annee: number): void {
    this.calendarService.changeMoisSuivant(mois, annee);
    this.moisPrecedent = this.calendarService.moisPrecedent;
    this.moisSuivant = this.calendarService.moisSuivant;
    this.moisAAfficher = this.calendarService.moisAAfficher;
    this.nombreJoursMois = this.calendarService.nombreJoursMois;
    this.premierJourMois = this.calendarService.premierJourMois;
    this.tableauNombreJoursMoisEncours = this.calendarService.tableauMoisEncrours();
    this.annee = this.calendarService.annee;
    this.nombreJoursMoisAn = this.calendarService.nombreJoursMoisAn;
  }
  affichageJour(id: string, mois: string) {
    this.router.navigate(['/jour'], { queryParams: { id: id, mois: mois } });
  }

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
    this.annee = this.calendarService.annee;
    this.grilleMois = this.calendarService.grilleMois;
  }
}

