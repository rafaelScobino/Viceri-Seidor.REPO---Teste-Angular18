import { Injectable } from '@angular/core';
import { PlanMain } from '../classes/planMain';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanStateService {
  private initialState: PlanMain = new PlanMain();

  private planList: PlanMain[] = [];

  private state$ = new BehaviorSubject(this.initialState);

  private listState$ = new BehaviorSubject(this.planList);

  constructor() {}

  public getListState(): Observable<PlanMain[]> {

    return this.listState$.asObservable();
  }

  public setListState(newState?: Partial<typeof PlanMain>): void {

    const plan = this.state$.getValue();
    if(!!newState){
      plan.map(newState);
    }

    this.planList = [...this.planList, plan];
    this.listState$.next(this.planList);
    this.state$.next(new PlanMain());
    const simplifiedList = this.planList.map(p => ({
    titulo: p.titulo,
    status: p.status
  }));
  localStorage.setItem("planList", JSON.stringify(simplifiedList));

;
  }

  public getState(): Observable<typeof this.initialState> {
    return this.state$.asObservable();
  }

  public setState(newState: Partial<typeof this.initialState>): void {
    const plan = this.state$.getValue();
    plan.map(newState);
    this.state$.next(plan);
  }
}
