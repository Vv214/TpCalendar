import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TpCalendar';
  isAdmin: boolean = true;

  printForm: boolean = false;

  adminChangeMode(isAdmin: boolean): boolean {
    console.log('isAdmin', isAdmin);
    return !isAdmin;
  }

  displayForm(isClicked: boolean) {
    this.printForm = isClicked;
  }

}
