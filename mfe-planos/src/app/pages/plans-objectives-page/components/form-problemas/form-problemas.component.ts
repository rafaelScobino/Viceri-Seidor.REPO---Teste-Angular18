import { PlanProblem } from './../../../../shared/classes/planProblem';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectModule } from 'primeng/select';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-form-problemas',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,InputTextModule,TextareaModule,ButtonModule,RadioButtonModule,SelectModule,FloatLabelModule],
  templateUrl: './form-problemas.component.html',
  styleUrl: './form-problemas.component.scss'
})
export class FormProblemasComponent implements OnInit {
@Output() formValues: EventEmitter<IEmitProblema> =  new EventEmitter();

@Input() objetivos:IObjetivoSelect[] = []

objetivoId!: number;

formProblema!: FormGroup;


// Array de Etapas
etapas = ["Planejamento","Execução","Validação"

];

// Array de Categorias
categorias = [ "Financeira", "Operacional" , "Qualidade"
];


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formProblema = this.fb.group({
      descricao: [''],
      etapa: [''],
      hasCausa: [''],
      resultado: [''],
      hasPrioridade: [''],
      categoria: ['']
    });
  }

    submit() {
      if (this.formProblema.valid) {

         this.formValues.emit(
          { problema: this.formProblema.getRawValue(),
            idObjetivo:this.objetivoId
          }
        );
        this.formProblema.reset()
      } else {
        console.warn('FormGerais inválido');
      }
    }


}

export interface IObjetivoSelect{
  id:number,
  descricao:string
}

export interface IEmitProblema{
problema:Partial<PlanProblem>,idObjetivo:number
}
