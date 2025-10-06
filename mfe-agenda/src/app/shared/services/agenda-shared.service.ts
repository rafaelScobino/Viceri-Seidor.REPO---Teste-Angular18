import { AgendaEvento } from './../classes/agenda-evento';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DateUtils } from '../utils/date-util';

@Injectable({
  providedIn: 'root',
})
export class AgendaSharedService {
  private initalAgendaList: AgendaEvento[] = [];
  private agendaConfig: IAgendaConfig = {
    date: new Date(),
    week: 1,
  };
  private state$ = new BehaviorSubject(this.initalAgendaList);
  private agendaConfigState$ = new BehaviorSubject(this.agendaConfig);

  public getAgendaConfigState() {
    return this.agendaConfigState$.asObservable();
  }

 public setAgendaConfigState(update: Partial<IAgendaConfig>) {
  this.agendaConfig = {
    ...this.agendaConfig,
    ...update
  };
  this.agendaConfigState$.next(this.agendaConfig);

}

  public getState() {
    return this.state$.asObservable();
  }

  public setState(value: AgendaEvento) {
    let newEvento = value;
    newEvento.id = this.initalAgendaList.length;

    this.initalAgendaList = [...this.initalAgendaList, newEvento];

    this.state$.next(this.initalAgendaList);
      this.saveAgendaToStorage();

  }

   saveAgendaToStorage() {
    const simplified = this.initalAgendaList.map(e => ({
      titulo: e.titulo,
      assunto: e.assunto,
      isPresencial: e.isPresencial,
      participantes: e.participantes,
      descricao: e.descricao,
      data: e.data
    }));
    localStorage.setItem('agendaList', JSON.stringify(simplified));
  }

  constructor() {}
}

export interface IAgendaConfig {
  date: Date;
  week: number;
}
