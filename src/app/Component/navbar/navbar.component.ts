import { Component, OnInit } from '@angular/core';
import { Client } from 'src/model/Client';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  createDate!: Date;
  client: Client = new Client('', '', '', '', true, '');

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.createDate = new Date();
  }

  affichageAdmin(isAdmin: boolean): boolean {
    console.log('affichage admin', isAdmin);
    return !isAdmin;
  }

  admin() {
    this.router.navigate(['/', 'admin']);
  }
}