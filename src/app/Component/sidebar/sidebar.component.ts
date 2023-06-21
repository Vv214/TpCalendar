import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input()
  isAdmin: boolean = false;

  adminChangeMode() {
    throw new Error('Method not implemented.');
    //TODO:
  }
  // afficherPlanning() {

  // }

}
