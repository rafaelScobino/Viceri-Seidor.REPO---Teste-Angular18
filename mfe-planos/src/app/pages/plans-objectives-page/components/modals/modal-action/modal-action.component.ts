import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormAcoesComponent } from '../../form-acoes/form-acoes.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PlanAction } from '../../../../../shared/classes/planAction';
@Component({
  selector: 'app-modal-action',
  standalone: true,
  imports:
  [DialogModule,ButtonModule,CommonModule,
    FormAcoesComponent
  ],
  templateUrl: './modal-action.component.html',
  styleUrl: './modal-action.component.scss'
})
export class ModalActionComponent {
@ViewChild('formAction') formAction!: FormAcoesComponent;
@Output() emitAction: EventEmitter<IEmitAction> = new EventEmitter();

@Input() idProblema: number | undefined;
@Input() idObjetivo: number | undefined;

visible: boolean = false;

    open(idObjetivo:number,idProblema:number) {
      this.idObjetivo = idObjetivo;
      this.idProblema = idProblema;
        this.visible = true;
    }

    submitForm(){
    const action: PlanAction= new PlanAction().map(this.formAction.submit())
       this.formAction.formAction.reset(this.formAction.defaultValues)
    let iEmitAciton:IEmitAction = {
      action: action,
      idObjetivo:this.idObjetivo,
      idProblema:this.idProblema
    }

    this.visible = false;
      this.emitAction.emit(iEmitAciton);
    }
}

export interface IEmitAction
{
  action:PlanAction,
  idObjetivo:number | undefined,
  idProblema:number | undefined
}
