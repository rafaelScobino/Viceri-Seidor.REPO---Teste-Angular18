import { Subscription } from 'rxjs';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { PeopleCardComponent } from './components/people-card/people-card.component';
import { PeopleFormGeraisComponent } from './components/people-form-gerais/people-form-gerais.component';
import { PeopleFormContatoComponent } from './components/people-form-contato/people-form-contato.component';
import { PeopleFormEnderecoComponent } from './components/people-form-endereco/people-form-endereco.component';
import { Person } from '../../shared/classes/person';
import { PeopleSharedService } from '../../shared/people-shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-form-page',
  standalone: true,
  imports: [
    StepperModule,
    ButtonModule,
    TableModule,
    ToastModule,
    PeopleCardComponent,
    PeopleFormGeraisComponent,
    PeopleFormContatoComponent,
    PeopleFormEnderecoComponent,
  ],
  templateUrl: './people-form-page.component.html',
  styleUrl: './people-form-page.component.scss',
})
export class PeopleFormPageComponent implements OnInit, OnDestroy {
  @ViewChild('formGerais') formGerais!: PeopleFormGeraisComponent;
  @ViewChild('formContato') formContato!: PeopleFormContatoComponent;
  @ViewChild('formEndereco') formEndereco!: PeopleFormEnderecoComponent;
@ViewChild('peopleCard') peopleCard!: PeopleCardComponent;
  private subscription!:Subscription

  constructor(private stateService: PeopleSharedService,private router:Router){}



  ngOnInit(): void {

    this.subscription = this.stateService.getState().subscribe((value)=>{
       if(this.peopleCard) this.peopleCard.person = value

    })



  }



updateState($event: Partial<Person>) {
this.stateService.setState($event)
}

updateListState() {
  let person = this.formEndereco.submitForm()
this.stateService.setPeopleListState(person)
this.router.navigate(['/pessoas/listagem'])

}



 ngOnDestroy(): void {
    this.subscription.unsubscribe()

  }


}
