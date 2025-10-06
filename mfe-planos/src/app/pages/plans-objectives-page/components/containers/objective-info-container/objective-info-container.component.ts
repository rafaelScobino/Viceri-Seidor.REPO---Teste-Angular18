import { PlanStateService } from './../../../../../shared/stateServices/plan-state.service';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGeraisComponent } from '../../form-gerais/form-gerais.component';
import { ButtonModule } from 'primeng/button';
import { Subscription, take } from 'rxjs';
import { PlanMain } from '../../../../../shared/classes/planMain';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-objective-info-container',
  standalone: true,
  imports: [FormGeraisComponent, ButtonModule, RippleModule],
  templateUrl: './objective-info-container.component.html',
  styleUrl: './objective-info-container.component.scss',
})
export class ObjectiveInfoContainerComponent
  implements AfterViewInit, OnDestroy
{
  @ViewChild('formGerais') formGeraisComponent!: FormGeraisComponent;

  private stateSubscription!: Subscription;

  constructor(
    private planStateService: PlanStateService,
    private messageService: MessageService
  ) {}

  ngAfterViewInit(): void {
    this.stateSubscription = this.planStateService
      .getState()
      .pipe(take(1))
      .subscribe((plan) => {
        this.formGeraisComponent.updateForm(plan);

      });
  }

  submitForm(): void {
    if (this.formGeraisComponent.formGerais.invalid) return;
    let partialPlan = this.formGeraisComponent.submit();
    partialPlan.objetivos = partialPlan.objetivos.map((e: string) => {
      return { descricao: e };
    });
    this.planStateService.setState(partialPlan);
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso!',
      detail: 'Informações adicionadas com sucesso!',
      key: 'plano-cadastro-toast',
      life: 900,
    });

  }

  ngOnDestroy(): void {
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
    }
  }
}
