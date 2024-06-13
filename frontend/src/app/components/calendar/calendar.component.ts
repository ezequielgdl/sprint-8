import { Component, ViewChild } from '@angular/core';
import {
  FullCalendarComponent,
  FullCalendarModule,
} from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  @ViewChild('fullcalendar')
  fullcalendar!: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    editable: true,
    selectable: true,
    events: [{ title: 'Existing Event', start: new Date() }],
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };

  handleDateClick(arg: { date: Date }) {
    const title = prompt('Enter event title:');
    if (title) {
      this.addEvent(title, arg.date);
    }
  }

  addEvent(title: string, date: Date) {
    const calendarApi = this.fullcalendar.getApi();
    calendarApi.addEvent({
      title: title,
      start: date,
      allDay: true,
    });
  }

  handleEventClick(clickInfo: { event: { title: any; remove: () => void } }) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'?`
      )
    ) {
      clickInfo.event.remove();
    }
  }
}
