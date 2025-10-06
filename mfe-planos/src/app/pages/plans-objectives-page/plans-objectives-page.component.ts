import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ObjectiveInfoContainerComponent } from './components/containers/objective-info-container/objective-info-container.component';
import { ObjectiveProblemsContainerComponent } from './components/containers/objective-problems-container/objective-problems-container.component';
import { ObjectiveActionsContainerComponent } from './components/containers/objective-actions-container/objective-actions-container.component';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { ToastModule } from 'primeng/toast';
import { Subscription } from 'rxjs';
import { PlanStateService } from '../../shared/stateServices/plan-state.service';
import { TableModule } from "primeng/table";
import { PlanMain } from '../../shared/classes/planMain';
@Component({
  selector: 'app-plans-objectives-page',
  standalone: true,
  imports: [
    StepperModule,
    ButtonModule,
    ToastModule,
    ObjectiveInfoContainerComponent,
    ObjectiveProblemsContainerComponent,
    ObjectiveActionsContainerComponent,
    TableModule
],
  templateUrl: './plans-objectives-page.component.html',
  styleUrl: './plans-objectives-page.component.scss',
})
export class PlansObjectivesPageComponent implements OnInit,OnDestroy {
  plan!: PlanMain;
  private planSubscription!: Subscription;

  constructor(private planStateService: PlanStateService,private router:Router) {}

  submitPlano() {
     this.planStateService.setListState();
     this.router.navigate(['/planos/listagem'])

  }

  ngOnInit(): void {
this.planSubscription = this.planStateService.getState().subscribe(plan => {
      this.plan = plan;

    });

  }

    ngOnDestroy(): void {
    this.planSubscription?.unsubscribe();
  }

}
