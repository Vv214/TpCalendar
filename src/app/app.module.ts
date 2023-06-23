import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DailyComponent } from './Component/daily/daily.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { FormComponent } from './Component/form/form.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './Component/admin/admin.component';
import { CalendarComponent } from './Component/calendar/calendar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DailyComponent,
    NavbarComponent,
    SidebarComponent,
    FormComponent,
    CalendarComponent,
    AdminComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
