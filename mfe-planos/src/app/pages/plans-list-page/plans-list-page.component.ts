import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { Column, TreeTableListComponent } from "../../shared/components/problems-actions-list/tree-table-list.component";
import { TreeNode } from 'primeng/api';
import { PlanMain } from '../../shared/classes/planMain';
import { Subscription } from 'rxjs';
import { PlanStateService } from '../../shared/stateServices/plan-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plans-list-page',
  standalone: true,
 imports: [RouterLink, PanelModule, ButtonModule, TreeTableListComponent,CommonModule],
  templateUrl: './plans-list-page.component.html',
  styleUrl: './plans-list-page.component.scss'
})
export class PlansListPageComponent implements OnInit,OnDestroy {
  plans: PlanMain[]=[];
  private planSubscription!: Subscription;

  constructor(private planStateService: PlanStateService) {}


tableCols: Column[] =[
    { field: 'titulo', header: 'Titulo' },
    { field: 'descricao', header: 'Descrição' },
    { field: 'dataInicio', header: 'Data Início' },
    { field: 'dataFim', header: 'Data Fim' },
    { field: 'status', header: 'Status' },
    { field: 'objetivos', header: 'NºObjetivos' }];


tableTreeFile: TreeNode[] = []


  ngOnInit(): void {
this.planSubscription = this.planStateService.getListState().subscribe(plans => {
      this.mapTreeNode(plans)

    });

  }


  mapTreeNode(dados:PlanMain[]){
 this.tableTreeFile = []


dados.forEach((p)=>{

let greatParentNode:TreeNode =
    {
      data:{
        titulo:p.titulo,
        descricao:p.descricao,
        dataInicio:p.dataInicio,
        dataFim:p.dataFim,
        status:p.status,
        objetivos:p.objetivos.length
      },
      children:[]
    };



    if(p?.objetivos?.length > 0){
      p.objetivos.forEach((o)=>{
 let grandParentNode:TreeNode =
    {
      data:{
        titulo:o.descricao,
      },
      children:[]
    };


if(o?.problemas?.length > 0){
    o.problemas.forEach((p)=>{
      let parentNode:TreeNode =
      {
        data:{
          titulo: p.descricao,
          descricao: p.etapa
        },
         expanded:true,
        children:[]
      }

      if(p?.acoes?.length > 0){
        p.acoes.forEach((a)=>{

          let childNode =
        {
          data:{
            descricao: a.descricao,
              responsavel:
              a.responsaveis?.length > 0?
              (a.responsaveis?.length === 1? a.responsaveis[0].nome: `${a.responsaveis[0].nome}... +`):
              '',
              dataInicio: a.dataInicioRealizada?a.dataInicioRealizada:( a.dataInicioPrevista? `${a.dataInicioPrevista}- prev`:'...'),
              dataFim: a.dataFimRealizada?a.dataFimRealizada:( a.dataFimPrevista? `${a.dataFimPrevista}- prev`:'...'),
              status: a.status
          }
        }

        parentNode?.children?.push(childNode)

        })
      }

      grandParentNode?.children?.push(parentNode)

    })
    };

 greatParentNode?.children?.push(grandParentNode)

      })
    }





    this.tableTreeFile.push(greatParentNode);


})





return
}





    ngOnDestroy(): void {
    this.planSubscription?.unsubscribe();
  }







MOCK_PLANS: any[] = [
  {
    id: 1,
    titulo: "Plano Alpha",
    descricao: "Descrição do Plano Alpha",
    dataInicio: "01/10/2025",
    dataFim: "31/12/2025",
    status: "Em andamento",
    objetivos: [
      {
        id: 1,
        descricao: "Objetivo 1 do Plano Alpha",
        problemas: [
          {
            id: 1,
            descricao: "Problema 1 do Objetivo 1",
            resultado: "Resultado 1",
            etapa: "Planejamento",
            hasCausa: "Sim",
            hasPrioridade: "Alta",
            categoria: "Financeira",
            acoes: [
              {
                id: 1,
                descricao: "Ação 1 do Problema 1",
                responsaveis: [{ nome: "João Silva", id: 1 }],
                dataInicioPrevista: "01/10/2025",
                dataFimPrevista: "05/10/2025",
                dataInicioRealizada: "02/10/2025",
                dataFimRealizada: "04/10/2025",
                status: "Concluído",
                idProblema: 1
              },
              {
                id: 2,
                descricao: "Ação 2 do Problema 1",
                responsaveis: [{ nome: "Maria Souza", id: 2 }],
                dataInicioPrevista: "03/10/2025",
                dataFimPrevista: "07/10/2025",
                dataInicioRealizada: "04/10/2025",
                dataFimRealizada: "06/10/2025",
                status: "Em andamento",
                idProblema: 1
              },
              { id: 3, descricao: "Ação 3", responsaveis: [], dataInicioPrevista: "", dataFimPrevista: "", dataInicioRealizada: "", dataFimRealizada: "", status: "Não iniciado", idProblema: 1 },
              { id: 4, descricao: "Ação 4", responsaveis: [], dataInicioPrevista: "", dataFimPrevista: "", dataInicioRealizada: "", dataFimRealizada: "", status: "Não iniciado", idProblema: 1 },
              { id: 5, descricao: "Ação 5", responsaveis: [], dataInicioPrevista: "", dataFimPrevista: "", dataInicioRealizada: "", dataFimRealizada: "", status: "Não iniciado", idProblema: 1 }
            ]
          },
          { id: 2, descricao: "Problema 2", resultado: "Resultado 2", etapa: "Execução", hasCausa: "Não", hasPrioridade: "Média", categoria: "Operacional", acoes: [] },
          { id: 3, descricao: "Problema 3", resultado: "Resultado 3", etapa: "Validação", hasCausa: "Sim", hasPrioridade: "Baixa", categoria: "Qualidade", acoes: [] },
          { id: 4, descricao: "Problema 4", resultado: "Resultado 4", etapa: "Planejamento", hasCausa: "Sim", hasPrioridade: "Alta", categoria: "Financeira", acoes: [] },
          { id: 5, descricao: "Problema 5", resultado: "Resultado 5", etapa: "Execução", hasCausa: "Não", hasPrioridade: "Média", categoria: "Operacional", acoes: [] }
        ]
      },
      {
        id: 2,
        descricao: "Objetivo 2 do Plano Alpha",
        problemas: []
      },
      { id: 3, descricao: "Objetivo 3 do Plano Alpha", problemas: [] },
      { id: 4, descricao: "Objetivo 4 do Plano Alpha", problemas: [] },
      { id: 5, descricao: "Objetivo 5 do Plano Alpha", problemas: [] }
    ]
  },
  { id: 2, titulo: "Plano Beta", descricao: "Descrição do Plano Beta", dataInicio: "05/10/2025", dataFim: "20/12/2025", status: "Não iniciado", objetivos: [] },
  { id: 3, titulo: "Plano Gama", descricao: "Descrição do Plano Gama", dataInicio: "10/10/2025", dataFim: "31/12/2025", status: "Pendente", objetivos: [] },
  { id: 4, titulo: "Plano Delta", descricao: "Descrição do Plano Delta", dataInicio: "15/10/2025", dataFim: "15/01/2026", status: "Em andamento", objetivos: [] },
  { id: 5, titulo: "Plano Épsilon", descricao: "Descrição do Plano Épsilon", dataInicio: "20/10/2025", dataFim: "20/02/2026", status: "Não iniciado", objetivos: [] }
];





}
