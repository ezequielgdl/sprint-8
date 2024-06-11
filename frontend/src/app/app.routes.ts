import { Routes } from '@angular/router';
import { MapsComponent } from './components/maps/maps.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'graphs', component: GraphsComponent },
  { path: 'calendar', component: CalendarComponent },
];
