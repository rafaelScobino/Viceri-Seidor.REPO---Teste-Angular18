import { Component, ViewChild } from '@angular/core';
import { IEmitAction, ModalActionComponent } from '../../modals/modal-action/modal-action.component';
import { PlanMain } from '../../../../../shared/classes/planMain';
import { PlanStateService } from '../../../../../shared/stateServices/plan-state.service';
import { Subscription } from 'rxjs';
import { TreeNode } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Column, TreeTableListComponent } from '../../../../../shared/components/problems-actions-list/tree-table-list.component';



@Component({
  selector: 'app-objective-actions-container',
  standalone: true,
  imports:
  [CommonModule,
    TreeTableListComponent,
    ModalActionComponent
  ],
  templateUrl: './objective-actions-container.component.html',
  styleUrl: './objective-actions-container.component.scss'
})
export class ObjectiveActionsContainerComponent {
@ViewChild('modalAction') modalAction!: ModalActionComponent;
plano: PlanMain;

tableTreeFile:TreeNode[] = [];
private stateSubscription!: Subscription;
tableCols: Column[] = [{ field: 'descricao', header: 'Descrição' },
    { field: 'responsavel', header: 'Responsável' },
    { field: 'dataInicioPrevista', header: 'Data Início Prevista' },
    { field: 'dataFimPrevista', header: 'Data Fim Prevista' },
    { field: 'dataInicio', header: 'Data Início' },
    { field: 'dataFim', header: 'Data Fim' },
    { field: 'status', header: 'Status' }];



  constructor(private planStateService: PlanStateService) {
    this.plano = new PlanMain();
  }


  ngOnInit(): void {
    this.stateSubscription = this.planStateService
      .getState().subscribe((plan) => {
        this.plano.map(plan);
        this.mapTreeNode(plan)

      });
  }



mapTreeNode(dados:PlanMain){
 this.tableTreeFile = []
  dados?.objetivos.forEach((o)=>{

    let grandParentNode:TreeNode =
    {
      data:{
        id:o.id,
        descricao:o.descricao,
      },
       expanded:true,
      children:[]
    };

    if(o?.problemas?.length > 0){
    o.problemas.forEach((p)=>{
      let parentNode:TreeNode =
      {
        data:{
          id: p.id,
          descricao: p.descricao,
        },
         expanded:true,
        children:[]
      }

      if(p?.acoes?.length > 0){
        p.acoes.forEach((a)=>{

          let childNode =
        {
          data:{
            id:a.id,
            descricao: a.descricao,
              responsavel:
              a.responsaveis?.length > 0?
              (a.responsaveis?.length === 1? a.responsaveis[0].nome: `${a.responsaveis[0].nome}... +`):
              '',
              dataInicio: a.dataInicioRealizada,
              dataInicioPrevista: a.dataInicioPrevista,
              dataFim: a.dataFimRealizada,
              dataFimPrevista: a.dataFimPrevista,
              status: a.status
          }
        }

        parentNode?.children?.push(childNode)

        })
      }

      grandParentNode?.children?.push(parentNode)

    })
    };

    this.tableTreeFile.push(grandParentNode);


})


  return
}





   _openModalAction(node:TreeNode){
    if(!node) return
    let idProblema = node.data.id
    let idObjetivo = node?.parent?.data.id
    this.modalAction.open(idObjetivo,idProblema)
  }

  addAction({action,idObjetivo,idProblema}:IEmitAction): void {
;
    if (!action) return;



    let objetivo = this.plano.objetivos.find((o) => o.id === idObjetivo);
    let problema = objetivo?.problemas.find(p=> p.id === idProblema);
    problema?.mapAction(action);

    this.planStateService.setState(this.plano);



  }

  ngOnDestroy(): void {
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
    }
  }











}
