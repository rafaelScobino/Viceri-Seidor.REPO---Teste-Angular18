
import { Component, OnInit } from '@angular/core';
import { HomeSummaryComponent } from '../home-summary/home-summary.component';
import { HomeScheduleListComponent } from '../home-schedule-list/home-schedule-list.component';
import { EventoUsuario } from '../../../../shared/classes/EventoUsuario';

@Component({
  selector: 'app-home-dashboard',
  standalone: true,
  imports: [HomeSummaryComponent,HomeScheduleListComponent],
  templateUrl: './home-dashboard.component.html',
  styleUrl: './home-dashboard.component.scss'
})
export class HomeDashboardComponent implements OnInit {

dataUsers: number[] = [1,4,2];
dataPlans: number[] = [2,2]
agendaList: any[] = [];


constructor(){}

  ngOnInit(): void {
    this.loadLocalStorageData()
  }


  loadLocalStorageData(): void {

    const usersRaw = localStorage.getItem('peopleList');
    const plansRaw = localStorage.getItem('planList');
    const agendaRaw = localStorage.getItem('agendaList');

    const users = usersRaw ? JSON.parse(usersRaw) : [];
    const plans = plansRaw ? JSON.parse(plansRaw) : [];
     const agenda = agendaRaw ? JSON.parse(agendaRaw) : [];


this.agendaList = [];
    agenda.forEach((element:Partial<EventoUsuario>) => {
      const agendaEvento:EventoUsuario = new EventoUsuario().map(element)
      this.agendaList.push(agendaEvento)
    });


    this.dataUsers = [
      users.filter((u: any) => u.escola.nome === 'ESCOLA A').length,
      users.filter((u: any) => u.escola.nome === 'ESCOLA B').length,
      users.filter((u: any) => u.escola.nome === 'ESCOLA C').length,
    ];

    this.dataPlans = [
      plans.filter((p: any) => p.status === 'Concluído').length,
      plans.filter((p: any) => p.status === 'Em andamento').length,
    ];
  }










}



