import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormProblemasComponent, IEmitProblema, IObjetivoSelect } from '../../form-problemas/form-problemas.component';
import { ProblemListComponent } from '../../problem-list/problem-list.component';
import { CommonModule } from '@angular/common';
import { Subscription, take } from 'rxjs';
import { PlanStateService } from '../../../../../shared/stateServices/plan-state.service';
import {
  PlanMain,
  PlanObjective,
} from '../../../../../shared/classes/planMain';
import { PlanProblem } from '../../../../../shared/classes/planProblem';

@Component({
  selector: 'app-objective-problems-container',
  standalone: true,
  imports: [CommonModule, FormProblemasComponent, ProblemListComponent],
  templateUrl: './objective-problems-container.component.html',
  styleUrl: './objective-problems-container.component.scss',
})
export class ObjectiveProblemsContainerComponent implements OnInit, OnDestroy {
  plano: PlanMain;

  objetivos: PlanObjective[] = [];
  objetivoSelect: IObjetivoSelect[] = [];

  private stateSubscription!: Subscription;

  constructor(private planStateService: PlanStateService) {
    this.plano = new PlanMain();
  }

  mapObjetivoSelect() {
   this.objetivoSelect = this.objetivos.map(o=> {return {id:o.id, descricao:o.descricao}})
  }

  ngOnInit(): void {
    this.stateSubscription = this.planStateService
      .getState().subscribe((plan) => {
        this.plano.map(plan);
        this.objetivos = plan.objetivos;
        this.mapObjetivoSelect();

      });
  }

  showForms() {
    return (
      this.objetivos && this.objetivos?.length && this.objetivos?.length > 0
    );
  }

  submitForm({problema, idObjetivo}:IEmitProblema): void {
    if (!problema) return;

    let objetivo = this.plano.objetivos.find((e) => e.id === idObjetivo);
    objetivo?.mapProblem(problema);

    this.planStateService.setState(this.plano);


  }

  ngOnDestroy(): void {
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
    }
  }
}
