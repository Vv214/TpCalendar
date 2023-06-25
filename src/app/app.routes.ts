import { Routes } from '@angular/router';
import { AdminComponent } from './Component/admin/admin.component';
import { CalendarComponent } from './Component/calendar/calendar.component';
import { FormComponent } from './Component/form/form.component';
import { DailyComponent } from './Component/daily/daily.component';

const ROUTES: Routes = [
    { path: '', component: CalendarComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'form', component: FormComponent },
    { path: 'jour', component: DailyComponent },
];

export { ROUTES };