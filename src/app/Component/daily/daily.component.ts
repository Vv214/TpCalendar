import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent {
  @Input()
  isAdmin: boolean = false;
  creneaux: number[] = [];
  ngOnInit() {
    for (let i = 1; i <= 48; i++) {
      this.creneaux.push(i);
    }
    //  let day: hour[] = [];
    //  Date d = new Date();
  }
}