import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { AgendaEvento } from '../../../../shared/classes/agenda-evento';
import {
  AgendaSharedService,
  IAgendaConfig,
} from '../../../../shared/services/agenda-shared.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-schedule-calendar',
  standalone: true,
  imports: [CalendarModule, CommonModule, TableModule],
  templateUrl: './schedule-calendar.component.html',
  styleUrl: './schedule-calendar.component.scss',
})
export class ScheduleCalendarComponent {
  @Input() agendaList: AgendaEvento[] = [];
@Input()monthWeekDays:(number | null)[] = [];
  weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  dayIndexes = [0, 1, 2, 3, 4, 5, 6];
  hours = Array.from({ length: 24 }, (_, i) => ({ hour: i }));

  eventos = [
    { titulo: 'Reunião', diaSemana: 1, hora: 9 },
    { titulo: 'Treino', diaSemana: 3, hora: 18 },
    { titulo: 'Dentista', diaSemana: 5, hora: 10 },
  ];


  constructor() {}

  ngOnInit(): void {
  }

  getEvento(hora: number, diaSemana: number) {
    return this.agendaList.find(
      (e) => e.hora === hora && e.diaSemana === diaSemana && this.monthWeekDays.some(d => e.diaMes == d)
    );
  }


  ngOnDestroy(): void {
  }
}
