import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input()
  afficheFormulaire: boolean = false;
  @Output()
  clickRdv = new EventEmitter();
  @Input()
  afficheAdminMode: boolean = false;
  @Output()
  clickAdmin = new EventEmitter();

  appelFormulairePriseRdv(): void {
    this.afficheFormulaire = !this.afficheFormulaire;
    this.clickRdv.emit(this.afficheFormulaire);
  }

  appelAdminMode(): void {
    this.afficheAdminMode = !this.afficheAdminMode;
    this.clickAdmin.emit(this.afficheAdminMode);
  }
}