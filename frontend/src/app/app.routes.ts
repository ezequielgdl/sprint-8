import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MapsComponent } from './components/maps/maps.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { CalendarComponent } from './components/calendar/calendar.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'graphs', component: GraphsComponent },
  { path: 'calendar', component: CalendarComponent },
];
