import { AgendaEvento } from './../../shared/classes/agenda-evento';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ScheduleHeaderComponent } from './components/schedule-header/schedule-header.component';
import { ScheduleMenuComponent } from './components/schedule-menu/schedule-menu.component';
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';
import { ModalEventComponent } from './components/modals/modal-event/modal-event.component';
import { SplitterModule } from 'primeng/splitter';
import {
  AgendaSharedService,
  IAgendaConfig,
} from '../../shared/services/agenda-shared.service';
import { Subscription } from 'rxjs';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    ScheduleHeaderComponent,
    ScheduleMenuComponent,
    ScheduleCalendarComponent,
    ModalEventComponent,
    SplitterModule,
    TableModule,
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent implements OnInit, OnDestroy {
  @ViewChild('modalEvent') modalEvent!: ModalEventComponent;

  private subscriptions = new Subscription();

  agendaList: AgendaEvento[] = [];
  month: Date = new Date();
  monthWeekDays: (number | null)[] = [];
  todayEvents: string[] = [];
  tomorrowEvents: string[] = [];

  constructor(private stateService: AgendaSharedService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.stateService.getAgendaConfigState().subscribe((config) => {
        this.setMonthWeekDays(config);

        this.month = config.date;
      })
    );

    this.subscriptions.add(
      this.stateService.getState().subscribe((list) => {

        this.setActualEvents(list)
        this.agendaList = list

      })
    );
  }

  setMonthWeekDays(config: IAgendaConfig) {
    const { date, week } = config;

    const ano = date.getFullYear();
    const mes = date.getMonth();

    const primeiroDia = new Date(ano, mes, 1);
    const primeiroDiaSemana = primeiroDia.getDay();
    const diasNoMes = new Date(ano, mes + 1, 0).getDate();

    const diaInicial = (week - 1) * 7 - primeiroDiaSemana + 1;
    let dias: (number | null)[] = [];

    for (let i = 0; i < 7; i++) {
      let dia = diaInicial + i;
      dias.push(dia > 0 && dia <= diasNoMes ? dia : null);
    }
    this.monthWeekDays = dias;
  }

  setActualEvents(list:AgendaEvento[]){

    const today = new Date();
    const tomorrow = new Date(today.getFullYear(),today.getMonth(),today.getDate()+1)

    list.forEach((e) =>{

      if(e.data.getDay() == today.getDay()){
          if(this.todayEvents.some(te => te == e.titulo  )) return
        this.todayEvents.push(e.titulo)
      }
      if(e.data.getDay() == tomorrow.getDay()){
        if(this.tomorrowEvents.some(te => te == e.titulo  )) return
        this.tomorrowEvents.push(e.titulo)
      }

    })
  }

  onOpenModalEvento() {
    this.modalEvent.open();
  }

  submitEvento(e: AgendaEvento) {
    if (!e) return;
    this.stateService.setState(e);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
