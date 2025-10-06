import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Calendar } from 'primeng/calendar';
import {
  DatePickerModule,
  DatePickerMonthChangeEvent,
} from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { AgendaSharedService } from '../../../../shared/services/agenda-shared.service';
@Component({
  selector: 'app-schedule-header',
  standalone: true,
  imports: [ButtonModule, DatePickerModule, FormsModule],
  templateUrl: './schedule-header.component.html',
  styleUrl: './schedule-header.component.scss',
})
export class ScheduleHeaderComponent {
  @Output() _openModalEvento = new EventEmitter<void>();

  @Input() monthSelector: Date = new Date();

  constructor(private stateService: AgendaSharedService) {}

  dateSelector: Date = new Date();
  semanaSelector: number = 1;
  currentWeekLabel = `Semana ${this.semanaSelector}`;

  prevWeek() {
    if (this.semanaSelector > 1) {
      this.semanaSelector--;
      this.updateLabel();
    }
    this.changeWeek(this.semanaSelector);
  }

  nextWeek() {
    if (this.semanaSelector < 6) {
      this.semanaSelector++;
      this.updateLabel();
    }
    this.changeWeek(this.semanaSelector);
  }

  changeMonth(e: Date) {
    this.changeDate(e);
  }

  changeDate(e: Date) {
    this.stateService.setAgendaConfigState({ date: e });
  }
  changeWeek(e: number) {
    this.stateService.setAgendaConfigState({ week: e });
  }

  updateLabel() {
    this.currentWeekLabel = `Semana ${this.semanaSelector}`;
  }

  openModalEvento() {
    this._openModalEvento.emit();
  }
}
