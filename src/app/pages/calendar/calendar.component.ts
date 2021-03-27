import {
  Component,
  OnInit
} from "@angular/core";
import { Calendar } from 'fullcalendar';
declare const require: any;
const FullCalendar= require('fullcalendar')
import swal from 'sweetalert2';

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    let today = new Date();
    let y = today.getFullYear();
    let m = today.getMonth();
    let d = today.getDate();
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      defaultDate: today,
      editable: true,
      selectable: true,
      header: {
        left: 'title',
        center: 'month,agendaWeek,agendaDay',
        right: 'prev,next,today'
      },
      views: {
        month: {
          titleFormat: { month: 'long', year: 'numeric'}
        },
        agendaWeek: {
          titleFormat: { month: 'long', year: 'numeric', day: 'numeric'},
        },
        agendaDay: {
          titleFormat: { month: 'short', year: 'numeric', day: 'numeric'}
        },
      },
      eventLimit: true, // allow "more" link when too many events
      events: [{
          title: 'Sistematski',
          start: new Date(y, m, 1),
          className: 'event-default'
        },
        {
          title: 'Dr.Danijela',
          start: new Date(y, m, d - 1, 10, 30),
          allDay: false,
          className: 'event-green'
        },
        {
          title: 'Pauza',
          start: new Date(y, m, d + 7, 12, 0),
          end: new Date(y, m, d + 7, 14, 0),
          allDay: false,
          className: 'event-red'
        },
        {
          title: 'Slobodno 13h-14h ',
          start: new Date(y, m, d - 2, 12, 0),
          allDay: true,
          className: 'event-azure'
        },
        {
          title: 'Slobodno',
          start: new Date(y, m, d + 1, 19, 0),
          end: new Date(y, m, d + 1, 22, 30),
          allDay: false,
          className: 'event-azure'
        },
        {
          title: 'Slobodno 14h-14:50h',
          start: new Date(y, m, 21),
          end: new Date(y, m, 22),
          className: 'event-orange'
        },
        {
          title: 'Pauza 15h',
          start: new Date(y, m, 21),
          end: new Date(y, m, 22),
          className: 'event-orange'
        }
      ],
      eventClick: function(info) {
        info.jsEvent.preventDefault();
        console.log('hey', info)
      },
      select: function(info) {
        console.log(info)
        swal({
          title: 'Dodajte opciju',
          html: '<div class="form-group">' +
            '<input class="form-control" placeholder="Vrijeme" id="input-field">' +
            '</div>',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          buttonsStyling: false
        }).then(function(result) {

          let eventData;
          let event_title = (document.getElementById("input-field") as HTMLInputElement).value;
          if (event_title) {
            eventData = {
              title: event_title,
              start: info.startStr,
              end: info.endStr
            };
            calendar.addEvent(eventData);
          }

        });
     }
    });
    calendar.render();
  }
}
