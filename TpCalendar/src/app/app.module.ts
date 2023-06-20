import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DailyComponent } from './Component/daily/daily.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { FormComponent } from './Component/form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DailyComponent,
    NavbarComponent,
    SidebarComponent,
    FormComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
