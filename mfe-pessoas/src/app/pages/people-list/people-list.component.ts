import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { PeopleSharedService } from '../../shared/people-shared.service';
import { Subscription } from 'rxjs';
import { Person } from '../../shared/classes/person';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [RouterLink, PanelModule, ButtonModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss',
})
export class PeopleListComponent implements OnInit, OnDestroy {
  @ViewChild('dataTable', { read: ViewContainerRef }) dataTable!: ViewContainerRef;

  dataTableEntryURL: string = 'http://localhost:4300/remoteEntry.js';

  private subscription!: Subscription;

  tableCols: { field: string; header: string }[] = [
    { field: 'nome', header: 'Nome' },
    { field: 'nomeSocial', header: 'Nome Social' },
    { field: 'cpf', header: 'CPF' },
    { field: 'email', header: 'E-mail' },
    { field: 'escolaName', header: 'Escola' },
    { field: 'endereco', header: 'Endereço' },
  ];
  tableData: Person[] = [];

  constructor(private peopleService: PeopleSharedService) {}

  ngOnInit(): void {
    this.loadTableComponent();

    this.subscription = this.peopleService.getPeopleListState().subscribe((list)=>{
      this.tableData = list;
    })
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
    ref.tableCaption = "Lista de Pessoas cadastradas";
    ref.tableCols = this.tableCols;
    ref.tableData = this.tableData;
    ref.hasBtns = false;
  }


  ngOnDestroy(): void {

  }






}

export interface DataTableComponentInterface {
  tableCaption: string;
  tableCols: { field: string; header: string }[];
  tableData: any[];
  hasBtns: boolean;
}
