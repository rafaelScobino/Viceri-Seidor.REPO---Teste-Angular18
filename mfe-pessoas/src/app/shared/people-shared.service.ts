import { Injectable } from '@angular/core';
import { Person } from './classes/person';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleSharedService {
  private initialPeopleList: Person[] = [];
  private initialPerson: Person = new Person();

  private state$ = new BehaviorSubject(this.initialPerson);
  private peopleList$ = new BehaviorSubject(this.initialPeopleList);

  public getPeopleListState() {
    return this.peopleList$.asObservable();
  }

    public getState(): Observable<Person> {
    return this.state$.asObservable();
  }

 public setPeopleListState(value?: Partial<Person>) {

   const person = this.state$.getValue();
    if(value){
      person.map(value);
    }

    person.id = this.initialPeopleList.length;

    this.initialPeopleList = [...this.initialPeopleList, person];
    this.peopleList$.next(this.initialPeopleList);
    this.state$.next(new Person());

    this.savePeopleToStorage();


}

  private savePeopleToStorage() {
    const simplified = this.initialPeopleList.map(p => ({
      nome: p.nome,
      escola: p.escola
    }));
    localStorage.setItem('peopleList', JSON.stringify(simplified));
  }


  public setState(value: Partial<Person>) {
    const person = new Person();
person.map(this.state$.getValue());
person.map(value);
    this.state$.next(person);

  }

  constructor() {}
}

export interface IAgendaConfig {
  date: Date;
  week: number;
}

