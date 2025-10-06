import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventoUsuario } from '../../../../shared/classes/EventoUsuario';



@Component({
  selector: 'app-home-schedule-list',
  standalone: true,
  imports: [],
  templateUrl: './home-schedule-list.component.html',
  styleUrl: './home-schedule-list.component.scss'
})
export class HomeScheduleListComponent implements OnInit {
  @ViewChild('dataTable', { read: ViewContainerRef }) dataTable!: ViewContainerRef;
  @Input()tableData: EventoUsuario[] = [];
    dataTableEntryURL: string = 'http://localhost:4300/remoteEntry.js';


    tableCols: { field: string; header: string }[] = [
      { field: 'titulo', header: 'Título' },
      { field: 'assunto', header: 'Assunto' },
      { field: 'descricao', header: 'Descrição' },
      { field: 'participantesList', header: 'Participantes' },
      { field: 'dataFormat', header: 'Data' },
    ];


    constructor() {}

    ngOnInit(): void {
      this.loadTableComponent();

    }

    async loadTableComponent(): Promise<void> {
      const m = await loadRemoteModule({
        type: 'module',
        remoteEntry: this.dataTableEntryURL,
        exposedModule: './DataTableComponent',
      });

      const ref = this.dataTable.createComponent<DataTableComponentInterface>(
        m.DataTableComponent
      ).instance;
      ref.tableCaption = "Lista de Eventos do Usuário";
      ref.tableCols = this.tableCols;
      ref.tableData = this.tableData;
      ref.hasBtns = false;
    }



  }

  export interface DataTableComponentInterface {
    tableCaption: string;
    tableCols: { field: string; header: string }[];
    tableData: any[];
    hasBtns: boolean;
  }

