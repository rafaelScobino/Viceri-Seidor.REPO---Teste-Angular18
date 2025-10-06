import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PlanProblem } from '../../../../shared/classes/planProblem';
@Component({
  selector: 'app-problem-list',
  standalone: true,
  imports: [TableModule,CommonModule],
  templateUrl: './problem-list.component.html',
  styleUrl: './problem-list.component.scss'
})
export class ProblemListComponent  {
@Input() tableData:PlanProblem[] = []

  colunas =
[
      { field: 'descricao', header: 'Descrição Problema' },
      { field: 'etapa', header: 'Etapa' },
      { field: 'hasCausa', header: 'Possui Causa' },
      { field: 'resultado', header: 'Resultado' },
      { field: 'hasPrioridade', header: 'Prioridade' },
      { field: 'categoria', header: 'Categoria' }
];

}
